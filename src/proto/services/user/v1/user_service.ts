/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "services.user.v1";

export interface UserEmail {
  email: string;
}

export interface UserEntity {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  username: string;
  password: string;
  emailVerified: boolean;
}

export interface GetUserByEmailRequest {
  email: string;
}

export interface GetUserByEmailResponse {
  user: UserEntity | undefined;
}

export interface GetUserByIdRequest {
  id: string;
}

export interface GetUserByIdResponse {
  user: UserEntity | undefined;
}

export interface UserId {
  id: string;
}

function createBaseUserEmail(): UserEmail {
  return { email: "" };
}

export const UserEmail = {
  encode(message: UserEmail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserEmail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserEmail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserEmail {
    return { email: isSet(object.email) ? String(object.email) : "" };
  },

  toJSON(message: UserEmail): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserEmail>, I>>(object: I): UserEmail {
    const message = createBaseUserEmail();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseUserEntity(): UserEntity {
  return {
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
    emailVerified: false,
  };
}

export const UserEntity = {
  encode(message: UserEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.dateOfBirth !== "") {
      writer.uint32(34).string(message.dateOfBirth);
    }
    if (message.phoneNumber !== "") {
      writer.uint32(42).string(message.phoneNumber);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.username !== "") {
      writer.uint32(58).string(message.username);
    }
    if (message.password !== "") {
      writer.uint32(66).string(message.password);
    }
    if (message.emailVerified === true) {
      writer.uint32(72).bool(message.emailVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.firstName = reader.string();
          break;
        case 3:
          message.lastName = reader.string();
          break;
        case 4:
          message.dateOfBirth = reader.string();
          break;
        case 5:
          message.phoneNumber = reader.string();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.username = reader.string();
          break;
        case 8:
          message.password = reader.string();
          break;
        case 9:
          message.emailVerified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      dateOfBirth: isSet(object.dateOfBirth) ? String(object.dateOfBirth) : "",
      phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : "",
      email: isSet(object.email) ? String(object.email) : "",
      username: isSet(object.username) ? String(object.username) : "",
      password: isSet(object.password) ? String(object.password) : "",
      emailVerified: isSet(object.emailVerified) ? Boolean(object.emailVerified) : false,
    };
  },

  toJSON(message: UserEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.dateOfBirth !== undefined && (obj.dateOfBirth = message.dateOfBirth);
    message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
    message.email !== undefined && (obj.email = message.email);
    message.username !== undefined && (obj.username = message.username);
    message.password !== undefined && (obj.password = message.password);
    message.emailVerified !== undefined && (obj.emailVerified = message.emailVerified);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserEntity>, I>>(object: I): UserEntity {
    const message = createBaseUserEntity();
    message.id = object.id ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.dateOfBirth = object.dateOfBirth ?? "";
    message.phoneNumber = object.phoneNumber ?? "";
    message.email = object.email ?? "";
    message.username = object.username ?? "";
    message.password = object.password ?? "";
    message.emailVerified = object.emailVerified ?? false;
    return message;
  },
};

function createBaseGetUserByEmailRequest(): GetUserByEmailRequest {
  return { email: "" };
}

export const GetUserByEmailRequest = {
  encode(message: GetUserByEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByEmailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserByEmailRequest {
    return { email: isSet(object.email) ? String(object.email) : "" };
  },

  toJSON(message: GetUserByEmailRequest): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserByEmailRequest>, I>>(object: I): GetUserByEmailRequest {
    const message = createBaseGetUserByEmailRequest();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseGetUserByEmailResponse(): GetUserByEmailResponse {
  return { user: undefined };
}

export const GetUserByEmailResponse = {
  encode(message: GetUserByEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserEntity.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByEmailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserEntity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserByEmailResponse {
    return { user: isSet(object.user) ? UserEntity.fromJSON(object.user) : undefined };
  },

  toJSON(message: GetUserByEmailResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? UserEntity.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserByEmailResponse>, I>>(object: I): GetUserByEmailResponse {
    const message = createBaseGetUserByEmailResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserEntity.fromPartial(object.user)
      : undefined;
    return message;
  },
};

function createBaseGetUserByIdRequest(): GetUserByIdRequest {
  return { id: "" };
}

export const GetUserByIdRequest = {
  encode(message: GetUserByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserByIdRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GetUserByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserByIdRequest>, I>>(object: I): GetUserByIdRequest {
    const message = createBaseGetUserByIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetUserByIdResponse(): GetUserByIdResponse {
  return { user: undefined };
}

export const GetUserByIdResponse = {
  encode(message: GetUserByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      UserEntity.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = UserEntity.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserByIdResponse {
    return { user: isSet(object.user) ? UserEntity.fromJSON(object.user) : undefined };
  },

  toJSON(message: GetUserByIdResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? UserEntity.toJSON(message.user) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUserByIdResponse>, I>>(object: I): GetUserByIdResponse {
    const message = createBaseGetUserByIdResponse();
    message.user = (object.user !== undefined && object.user !== null)
      ? UserEntity.fromPartial(object.user)
      : undefined;
    return message;
  },
};

function createBaseUserId(): UserId {
  return { id: "" };
}

export const UserId = {
  encode(message: UserId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserId {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserId>, I>>(object: I): UserId {
    const message = createBaseUserId();
    message.id = object.id ?? "";
    return message;
  },
};

export type UsersServiceService = typeof UsersServiceService;
export const UsersServiceService = {
  getUserByEmail: {
    path: "/services.user.v1.UsersService/GetUserByEmail",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserByEmailRequest) => Buffer.from(GetUserByEmailRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserByEmailRequest.decode(value),
    responseSerialize: (value: GetUserByEmailResponse) => Buffer.from(GetUserByEmailResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUserByEmailResponse.decode(value),
  },
  getUserById: {
    path: "/services.user.v1.UsersService/GetUserById",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetUserByIdRequest) => Buffer.from(GetUserByIdRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetUserByIdRequest.decode(value),
    responseSerialize: (value: GetUserByIdResponse) => Buffer.from(GetUserByIdResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetUserByIdResponse.decode(value),
  },
} as const;

export interface UsersServiceServer extends UntypedServiceImplementation {
  getUserByEmail: handleUnaryCall<GetUserByEmailRequest, GetUserByEmailResponse>;
  getUserById: handleUnaryCall<GetUserByIdRequest, GetUserByIdResponse>;
}

export interface UsersServiceClient extends Client {
  getUserByEmail(
    request: GetUserByEmailRequest,
    callback: (error: ServiceError | null, response: GetUserByEmailResponse) => void,
  ): ClientUnaryCall;
  getUserByEmail(
    request: GetUserByEmailRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUserByEmailResponse) => void,
  ): ClientUnaryCall;
  getUserByEmail(
    request: GetUserByEmailRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUserByEmailResponse) => void,
  ): ClientUnaryCall;
  getUserById(
    request: GetUserByIdRequest,
    callback: (error: ServiceError | null, response: GetUserByIdResponse) => void,
  ): ClientUnaryCall;
  getUserById(
    request: GetUserByIdRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetUserByIdResponse) => void,
  ): ClientUnaryCall;
  getUserById(
    request: GetUserByIdRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetUserByIdResponse) => void,
  ): ClientUnaryCall;
}

export const UsersServiceClient = makeGenericClientConstructor(
  UsersServiceService,
  "services.user.v1.UsersService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UsersServiceClient;
  service: typeof UsersServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
