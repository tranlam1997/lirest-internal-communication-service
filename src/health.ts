import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall } from '@grpc/grpc-js';
import { CheckRequest, CheckResponse, HealthServiceServer, ServingStatus } from './proto/services/health/v1/health_service';
import { logger } from './common/winston';
import { LirestServiceError } from './common/error';

const HealthLogger = logger('HealthService');
const healthStatus: Map<string, ServingStatus> = new Map(Object.entries({
  '': ServingStatus.SERVING,
  'UsersServiceClient': ServingStatus.SERVING,
  'HealthServiceClient': ServingStatus.SERVING,
}));

/**
 * gRPC Health Check
 * https://github.com/grpc/grpc-node/tree/master/packages/grpc-health-check
 */
class HealthServer implements Partial<HealthServiceServer> {
  [method: string]: UntypedHandleCall;

  // public check: handleUnaryCall<HealthCheckRequest, HealthCheckResponse> = (call, callback) => {}
  public check(call: ServerUnaryCall<CheckRequest, CheckResponse>, callback: sendUnaryData<CheckResponse>): void {
    const { service } = call.request;
    HealthLogger.info('healthCheck', service);

    const serviceStatus = healthStatus.get(service);
    if (!serviceStatus) {
      return callback(new LirestServiceError(status.NOT_FOUND, 'NotFoundService'), null);
    }

    callback(null, {
      status: serviceStatus,
    });
  }
}

export {
  HealthServer,
  healthStatus,
  ServingStatus,
};
