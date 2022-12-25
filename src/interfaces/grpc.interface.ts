import { ChannelCredentials, ChannelOptions, ServiceDefinition } from "@grpc/grpc-js";
import { UsersServiceClient } from "./service.interface";

type LirestServiceClient = UsersServiceClient

export interface LirestServiceClientConstructor {
  new(address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): LirestServiceClient;
  service: ServiceDefinition;
  serviceName?: string;
}

