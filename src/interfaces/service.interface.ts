/* eslint-disable @typescript-eslint/ban-types */
import { Client } from "@grpc/grpc-js";

export interface UsersServiceClient extends Client {
  getUserByEmail: Function;
  getUserById: Function;
  updateUser: Function;
}
