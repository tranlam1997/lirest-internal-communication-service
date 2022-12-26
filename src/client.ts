import { ChannelOptions, credentials } from '@grpc/grpc-js';
import { LirestServiceClient, LirestServiceClientConstructor } from './interfaces/grpc.interface';
import { logger } from './common/winston';

const ClientLogger = logger('GrpcClient');

export class LirestGrpcClient {
  private client: LirestServiceClient;
  private serviceClient: LirestServiceClientConstructor;
  private serviceName: string;

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
    this.serviceName = this.client.constructor.name;
    ClientLogger.info(`Client running at ${host}`);
  }

  public getClient() {
    return this.client;
  }

  public getServiceName() {
    return this.serviceName;
  }
}
