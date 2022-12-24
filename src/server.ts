import grpc from '@grpc/grpc-js';
import { Logger } from 'winston';

const logger = new Logger({ level: 'info' });

export class GrpcServer {
  private server: grpc.Server;
  private host: string;

  constructor(host: string) {
    this.server = new grpc.Server();
    this.host = host;
  }

  public addService(service: grpc.ServiceDefinition, methods: any) {
    this.server.addService(service, methods);
  }

  public bindAsync() {
    this.server.bindAsync(this.host, grpc.ServerCredentials.createInsecure(), () => {
      logger.info(`Server running at ${this.host} `);
      this.server.start();
    });
  }
}
