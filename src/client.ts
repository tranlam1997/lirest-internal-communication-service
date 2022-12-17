import grpc from '@grpc/grpc-js';
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';

export class Client {
  private client: ServiceClient;
  private serviceClient: grpc.ServiceClientConstructor;

  constructor({
    host,
    service,
  }: {
    host: string;
    service: grpc.ServiceClientConstructor;
  }) {
    this.serviceClient = service;
    this.client = new this.serviceClient(host, grpc.credentials.createInsecure());
  }

  public getClient() {
    return this.client;
  }
}
