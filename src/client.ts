import { ChannelOptions, credentials } from '@grpc/grpc-js';
import { LirestServiceClient, LirestServiceClientConstructor } from './interfaces/grpc.interface';
import { logger } from './common/winston';
import { ServiceNames } from './enums/grpc.enum';

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
    this.client.serviceName = ServiceNames.find((serviceName) => serviceName === service.serviceName);
    ClientLogger.info(`Client running at ${host}`);
  }

  public getClient() {
    return this.client;
  }
}
