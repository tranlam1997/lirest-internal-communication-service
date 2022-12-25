/* eslint-disable @typescript-eslint/ban-types */
import { ChannelCredentials, ChannelOptions, Client, ServiceDefinition } from "@grpc/grpc-js";
import { UsersServiceClient } from "./service.interface";

export type LirestServiceClient = UsersServiceClient

export interface LirestServiceClientConstructor {
  new(address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): LirestServiceClient;
  service: ServiceDefinition;
  serviceName?: string;
}

