import { ChannelCredentials, ChannelOptions, ServiceDefinition } from "@grpc/grpc-js";
import { ServiceClient } from "@grpc/grpc-js/build/src/make-client";

export type LirestServiceClient = ServiceClient;

export interface LirestServiceClientConstructor {
  new(address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): LirestServiceClient;
  service: ServiceDefinition;
  serviceName?: string;
}

