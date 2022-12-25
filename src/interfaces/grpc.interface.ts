/* eslint-disable @typescript-eslint/ban-types */
import { ChannelCredentials, ChannelOptions, ServiceDefinition } from "@grpc/grpc-js";
import * as ServiceClient from "../proto";

export type LirestServiceClient = ServiceClient.UsersServiceClient

export interface LirestServiceClientConstructor {
  new(address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): LirestServiceClient;
  service: ServiceDefinition;
  serviceName?: string;
}

