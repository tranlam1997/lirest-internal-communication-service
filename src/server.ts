import { ChannelOptions, Server, ServerCredentials, ServiceDefinition, UntypedServiceImplementation } from '@grpc/grpc-js';
import { logger } from './common/winston';
import { HealthServiceService } from './proto/services/health/v1/health_service';
import { HealthServer } from './health';

const ClientLogger = logger('GrpcServer');

export class LirestGrpcServer {
  private server: Server;
  private host: string;

  constructor({
    host,
    channelOptions = {},
  }: {
    host: string;
    channelOptions?: ChannelOptions;
  }) {
    this.server = new Server(channelOptions);
    this.host = host;
    this.server.addService(HealthServiceService, new HealthServer())
  }

  public addService(service: ServiceDefinition, methods: UntypedServiceImplementation) {
    this.server.addService(service, methods);
  }

  public bindAsync() {
    this.server.bindAsync(this.host, ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
      if (error) {
        ClientLogger.error(error);
        return;
      }
      ClientLogger.info(`Server running at ${this.host}: ${port} `);
      this.server.start();
    });
  }
}
