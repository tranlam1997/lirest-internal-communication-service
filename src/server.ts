import grpc from '@grpc/grpc-js';
import { Logger } from 'winston';

const logger = new Logger({ level: 'info' });

export class LirestGrpcServer {
  private server: grpc.Server;
  private host: string;

  constructor({
    host,
    channelOptions = {},
  }: {
    host: string;
    channelOptions?: grpc.ChannelOptions;
  }) {
    this.server = new grpc.Server(channelOptions);
    this.host = host;
  }

  public addService(service: grpc.ServiceDefinition, methods: grpc.UntypedServiceImplementation) {
    this.server.addService(service, methods);
  }

  public bindAsync() {
    this.server.bindAsync(this.host, grpc.ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
      if (error) {
        logger.error(error);
        return;
      }
      logger.info(`Server running at ${this.host}: ${port} `);
      this.server.start();
    });
  }
}
