/* eslint-disable @typescript-eslint/ban-types */
import { ChannelCredentials, ChannelOptions, Client, ServiceDefinition } from "@grpc/grpc-js";

export type LirestServiceClient = Client & {
  [methodName: string]: Function;
};

export interface LirestServiceClientConstructor {
  new(address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): LirestServiceClient;
  service: ServiceDefinition;
  serviceName?: string;
}

