import { ChannelCredentials, ChannelOptions, ServiceDefinition } from "@grpc/grpc-js";
import { ServiceClient } from "@grpc/grpc-js/build/src/make-client";

export interface LirestServiceClientConstructor {
  new(address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient;
  service: ServiceDefinition;
  serviceName?: string;
}
