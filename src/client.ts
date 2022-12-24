import grpc from '@grpc/grpc-js';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { Logger } from 'winston';

const logger = new Logger({ level: 'info' });

export class GrpcClient {
  private client: ServiceClient;
  private serviceClient: grpc.ServiceClientConstructor;

  constructor({
    host,
    service,
    channelOptions = {},
  }: {
    host: string;
    service: grpc.ServiceClientConstructor;
    channelOptions?: grpc.ChannelOptions;
  }) {
    this.serviceClient = service;
    this.client = new this.serviceClient(host, grpc.credentials.createInsecure(), channelOptions);
    logger.info(`Client running at ${host}`);
  }

  public getClient() {
    return this.client;
  }
}
