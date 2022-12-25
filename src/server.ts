import { ChannelOptions, Server, ServerCredentials, ServiceDefinition, UntypedServiceImplementation } from '@grpc/grpc-js';
import { Logger } from 'winston';

const logger = new Logger({ level: 'info' });

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
  }

  public addService(service: ServiceDefinition, methods: UntypedServiceImplementation) {
    this.server.addService(service, methods);
  }

  public bindAsync() {
    this.server.bindAsync(this.host, ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
      if (error) {
        logger.error(error);
        return;
      }
      logger.info(`Server running at ${this.host}: ${port} `);
      this.server.start();
    });
  }
}
