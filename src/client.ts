import grpc from '@grpc/grpc-js';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import protoLoader, { Options } from '@grpc/proto-loader';

const PROTO_PATH = __dirname + '/protos/';

export class Client {
  private client: ServiceClient;
  private service: grpc.ServiceClientConstructor;

  constructor(options: Options, protoName: string, serviceName: string, host: string) {
    const packageDefinition = protoLoader.loadSync(PROTO_PATH + protoName, options);
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
    this.service = protoDescriptor[serviceName] as grpc.ServiceClientConstructor;
    this.client = new this.service(host, grpc.credentials.createInsecure());
  }

  public getService() {
    return this.service;
  }

  public getClient() {
    return this.client;
  }
}
