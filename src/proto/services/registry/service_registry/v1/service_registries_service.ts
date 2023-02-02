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
import { EmptyRequest } from "../../../../com/empty_request/v1/empty_request";

export interface ServiceRegistryEntity {
  id: string;
  name: string;
  description: string;
  url: string;
  protocol: string;
  host: string;
  port: number;
  baseUrl: string;
  type: string;
  version: string;
  status: boolean;
}

export interface GetAllServiceRegistriesResponse {
  serviceRegistries: ServiceRegistryEntity[];
}

function createBaseServiceRegistryEntity(): ServiceRegistryEntity {
  return {
    id: "",
    name: "",
    description: "",
    url: "",
    protocol: "",
    host: "",
    port: 0,
    baseUrl: "",
    type: "",
    version: "",
    status: false,
  };
}

export const ServiceRegistryEntity = {
  encode(message: ServiceRegistryEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.protocol !== "") {
      writer.uint32(42).string(message.protocol);
    }
    if (message.host !== "") {
      writer.uint32(50).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(56).int32(message.port);
    }
    if (message.baseUrl !== "") {
      writer.uint32(66).string(message.baseUrl);
    }
    if (message.type !== "") {
      writer.uint32(74).string(message.type);
    }
    if (message.version !== "") {
      writer.uint32(82).string(message.version);
    }
    if (message.status === true) {
      writer.uint32(88).bool(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceRegistryEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceRegistryEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.protocol = reader.string();
          break;
        case 6:
          message.host = reader.string();
          break;
        case 7:
          message.port = reader.int32();
          break;
        case 8:
          message.baseUrl = reader.string();
          break;
        case 9:
          message.type = reader.string();
          break;
        case 10:
          message.version = reader.string();
          break;
        case 11:
          message.status = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServiceRegistryEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      host: isSet(object.host) ? String(object.host) : "",
      port: isSet(object.port) ? Number(object.port) : 0,
      baseUrl: isSet(object.baseUrl) ? String(object.baseUrl) : "",
      type: isSet(object.type) ? String(object.type) : "",
      version: isSet(object.version) ? String(object.version) : "",
      status: isSet(object.status) ? Boolean(object.status) : false,
    };
  },

  toJSON(message: ServiceRegistryEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.host !== undefined && (obj.host = message.host);
    message.port !== undefined && (obj.port = Math.round(message.port));
    message.baseUrl !== undefined && (obj.baseUrl = message.baseUrl);
    message.type !== undefined && (obj.type = message.type);
    message.version !== undefined && (obj.version = message.version);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  create<I extends Exact<DeepPartial<ServiceRegistryEntity>, I>>(base?: I): ServiceRegistryEntity {
    return ServiceRegistryEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ServiceRegistryEntity>, I>>(object: I): ServiceRegistryEntity {
    const message = createBaseServiceRegistryEntity();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.protocol = object.protocol ?? "";
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    message.baseUrl = object.baseUrl ?? "";
    message.type = object.type ?? "";
    message.version = object.version ?? "";
    message.status = object.status ?? false;
    return message;
  },
};

function createBaseGetAllServiceRegistriesResponse(): GetAllServiceRegistriesResponse {
  return { serviceRegistries: [] };
}

export const GetAllServiceRegistriesResponse = {
  encode(message: GetAllServiceRegistriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.serviceRegistries) {
      ServiceRegistryEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllServiceRegistriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllServiceRegistriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serviceRegistries.push(ServiceRegistryEntity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllServiceRegistriesResponse {
    return {
      serviceRegistries: Array.isArray(object?.serviceRegistries)
        ? object.serviceRegistries.map((e: any) => ServiceRegistryEntity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAllServiceRegistriesResponse): unknown {
    const obj: any = {};
    if (message.serviceRegistries) {
      obj.serviceRegistries = message.serviceRegistries.map((e) => e ? ServiceRegistryEntity.toJSON(e) : undefined);
    } else {
      obj.serviceRegistries = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllServiceRegistriesResponse>, I>>(base?: I): GetAllServiceRegistriesResponse {
    return GetAllServiceRegistriesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllServiceRegistriesResponse>, I>>(
    object: I,
  ): GetAllServiceRegistriesResponse {
    const message = createBaseGetAllServiceRegistriesResponse();
    message.serviceRegistries = object.serviceRegistries?.map((e) => ServiceRegistryEntity.fromPartial(e)) || [];
    return message;
  },
};

export type ServiceRegistriesServiceService = typeof ServiceRegistriesServiceService;
export const ServiceRegistriesServiceService = {
  getAllServiceRegistries: {
    path: "/services.registry.service_registry.v1.ServiceRegistriesService/GetAllServiceRegistries",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EmptyRequest) => Buffer.from(EmptyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EmptyRequest.decode(value),
    responseSerialize: (value: GetAllServiceRegistriesResponse) =>
      Buffer.from(GetAllServiceRegistriesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllServiceRegistriesResponse.decode(value),
  },
} as const;

export interface ServiceRegistriesServiceServer extends UntypedServiceImplementation {
  getAllServiceRegistries: handleUnaryCall<EmptyRequest, GetAllServiceRegistriesResponse>;
}

export interface ServiceRegistriesServiceClient extends Client {
  getAllServiceRegistries(
    request: EmptyRequest,
    callback: (error: ServiceError | null, response: GetAllServiceRegistriesResponse) => void,
  ): ClientUnaryCall;
  getAllServiceRegistries(
    request: EmptyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllServiceRegistriesResponse) => void,
  ): ClientUnaryCall;
  getAllServiceRegistries(
    request: EmptyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllServiceRegistriesResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceRegistriesServiceClient = makeGenericClientConstructor(
  ServiceRegistriesServiceService,
  "services.registry.service_registry.v1.ServiceRegistriesService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): ServiceRegistriesServiceClient;
  service: typeof ServiceRegistriesServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
