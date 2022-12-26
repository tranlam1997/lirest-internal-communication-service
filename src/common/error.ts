import { Metadata, ServiceError, status } from '@grpc/grpc-js';

/**
 * https://grpc.io/grpc/node/grpc.html#~ServiceError__anchor
 */
export class LirestServiceError extends Error implements Partial<ServiceError> {
  public override name = 'LirestServiceError';

  constructor(
    public code: status,
    public override message: string,
    public details?: string,
    public metadata?: Metadata,
  ) {
    super(message);
  }
}
