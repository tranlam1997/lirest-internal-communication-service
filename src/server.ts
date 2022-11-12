import grpc from '@grpc/grpc-js';
import protoLoader, { Options } from '@grpc/proto-loader';
import { Logger } from 'winston';
import { ServiceName } from './interfaces/service.interface';

const PROTO_PATH = __dirname + '/protos/';
const logger = new Logger({ level: 'info' });

export class Server {
  private server: grpc.Server;
  private host: string;
  private grpcService: grpc.ServiceClientConstructor;

  constructor({
    protoLoaderOptions,
    serviceName,
    host,
  }: {
    protoLoaderOptions: Options;
    serviceName: ServiceName;
    host: string;
  }) {
    const packageDefinition = protoLoader.loadSync(
      PROTO_PATH + `${serviceName}.proto`,
      protoLoaderOptions,
    );
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
    this.grpcService = protoDescriptor[serviceName] as grpc.ServiceClientConstructor;
    this.server = new grpc.Server();
    this.host = host;
  }

  public addService(methods: any) {
    this.server.addService(this.grpcService.service, methods);
  }

  public bindAsync() {
    this.server.bindAsync(this.host, grpc.ServerCredentials.createInsecure(), () => {
      logger.info(`Server running at ${this.host}`);
      this.server.start();
    });
  }
}
