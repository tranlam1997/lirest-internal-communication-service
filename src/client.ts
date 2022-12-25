import grpc from '@grpc/grpc-js';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
import { Logger } from 'winston';
import { LirestServiceClientConstructor } from './interfaces/grpc.interface';

const logger = new Logger({ level: 'info' });

export class LirestGrpcClient {
  private client: ServiceClient;
  private serviceClient: LirestServiceClientConstructor;

  constructor({
    host,
    service,
    channelOptions = {},
  }: {
    host: string;
    service: LirestServiceClientConstructor;
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
