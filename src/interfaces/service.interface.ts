/* eslint-disable @typescript-eslint/ban-types */
import { ServiceClient } from '@grpc/grpc-js/build/src/make-client';
export type ServiceName = 'user' | 'auth';

export interface UsersServiceClient extends ServiceClient {
  getUserByEmail: Function;
  getUserById: Function;
  updateUser: Function;
}
