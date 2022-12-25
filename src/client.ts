import { ChannelOptions, credentials } from '@grpc/grpc-js';
import { Logger } from 'winston';
import { LirestServiceClient, LirestServiceClientConstructor } from './interfaces/grpc.interface';

const logger = new Logger({ level: 'info' });

export class LirestGrpcClient {
  private client: LirestServiceClient;
  private serviceClient: LirestServiceClientConstructor;

  constructor({
    host,
    service,
    channelOptions = {},
  }: {
    host: string;
    service: LirestServiceClientConstructor;
    channelOptions?: ChannelOptions;
  }) {
    this.serviceClient = service;
    this.client = new this.serviceClient(host, credentials.createInsecure(), channelOptions);
    logger.info(`Client running at ${host}`);
  }

  public getClient() {
    return this.client;
  }
}
