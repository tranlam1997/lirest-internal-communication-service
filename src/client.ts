import { ChannelOptions, credentials } from '@grpc/grpc-js';
import { LirestServiceClient, LirestServiceClientConstructor } from './interfaces/grpc.interface';
import { logger } from './common/logger-config';

const ClientLogger = logger('GrpcClient');

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
    ClientLogger.info(`Client running at ${host}`);
  }

  public getClient() {
    return this.client;
  }
}
