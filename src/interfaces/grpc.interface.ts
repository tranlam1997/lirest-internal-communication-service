/* eslint-disable @typescript-eslint/ban-types */
import { ChannelCredentials, ChannelOptions, Client, ServiceDefinition } from "@grpc/grpc-js";

export interface LirestServiceClientConstructor<T extends Client = Client> {
  new(address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): T & { serviceName: string };
  service: ServiceDefinition;
  serviceName?: string;
}

