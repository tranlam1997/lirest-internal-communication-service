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

export interface ApiEndpointEntity {
  id: string;
  route: string;
  description: string;
  serviceName: string;
  method: string;
  apiVersion: number;
  deprecated: boolean;
}

export interface GetAllApiEndpointsResponse {
  apiEndpoints: ApiEndpointEntity[];
}

function createBaseApiEndpointEntity(): ApiEndpointEntity {
  return { id: "", route: "", description: "", serviceName: "", method: "", apiVersion: 0, deprecated: false };
}

export const ApiEndpointEntity = {
  encode(message: ApiEndpointEntity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.route !== "") {
      writer.uint32(18).string(message.route);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.serviceName !== "") {
      writer.uint32(34).string(message.serviceName);
    }
    if (message.method !== "") {
      writer.uint32(42).string(message.method);
    }
    if (message.apiVersion !== 0) {
      writer.uint32(48).int32(message.apiVersion);
    }
    if (message.deprecated === true) {
      writer.uint32(56).bool(message.deprecated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiEndpointEntity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiEndpointEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.route = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.serviceName = reader.string();
          break;
        case 5:
          message.method = reader.string();
          break;
        case 6:
          message.apiVersion = reader.int32();
          break;
        case 7:
          message.deprecated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApiEndpointEntity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      route: isSet(object.route) ? String(object.route) : "",
      description: isSet(object.description) ? String(object.description) : "",
      serviceName: isSet(object.serviceName) ? String(object.serviceName) : "",
      method: isSet(object.method) ? String(object.method) : "",
      apiVersion: isSet(object.apiVersion) ? Number(object.apiVersion) : 0,
      deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
    };
  },

  toJSON(message: ApiEndpointEntity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.route !== undefined && (obj.route = message.route);
    message.description !== undefined && (obj.description = message.description);
    message.serviceName !== undefined && (obj.serviceName = message.serviceName);
    message.method !== undefined && (obj.method = message.method);
    message.apiVersion !== undefined && (obj.apiVersion = Math.round(message.apiVersion));
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    return obj;
  },

  create<I extends Exact<DeepPartial<ApiEndpointEntity>, I>>(base?: I): ApiEndpointEntity {
    return ApiEndpointEntity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApiEndpointEntity>, I>>(object: I): ApiEndpointEntity {
    const message = createBaseApiEndpointEntity();
    message.id = object.id ?? "";
    message.route = object.route ?? "";
    message.description = object.description ?? "";
    message.serviceName = object.serviceName ?? "";
    message.method = object.method ?? "";
    message.apiVersion = object.apiVersion ?? 0;
    message.deprecated = object.deprecated ?? false;
    return message;
  },
};

function createBaseGetAllApiEndpointsResponse(): GetAllApiEndpointsResponse {
  return { apiEndpoints: [] };
}

export const GetAllApiEndpointsResponse = {
  encode(message: GetAllApiEndpointsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.apiEndpoints) {
      ApiEndpointEntity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllApiEndpointsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllApiEndpointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.apiEndpoints.push(ApiEndpointEntity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAllApiEndpointsResponse {
    return {
      apiEndpoints: Array.isArray(object?.apiEndpoints)
        ? object.apiEndpoints.map((e: any) => ApiEndpointEntity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAllApiEndpointsResponse): unknown {
    const obj: any = {};
    if (message.apiEndpoints) {
      obj.apiEndpoints = message.apiEndpoints.map((e) => e ? ApiEndpointEntity.toJSON(e) : undefined);
    } else {
      obj.apiEndpoints = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllApiEndpointsResponse>, I>>(base?: I): GetAllApiEndpointsResponse {
    return GetAllApiEndpointsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllApiEndpointsResponse>, I>>(object: I): GetAllApiEndpointsResponse {
    const message = createBaseGetAllApiEndpointsResponse();
    message.apiEndpoints = object.apiEndpoints?.map((e) => ApiEndpointEntity.fromPartial(e)) || [];
    return message;
  },
};

export type ApiEndpointsServiceService = typeof ApiEndpointsServiceService;
export const ApiEndpointsServiceService = {
  getAllApiEndpoints: {
    path: "/services.registry.api_endpoint.v1.ApiEndpointsService/GetAllApiEndpoints",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: EmptyRequest) => Buffer.from(EmptyRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => EmptyRequest.decode(value),
    responseSerialize: (value: GetAllApiEndpointsResponse) =>
      Buffer.from(GetAllApiEndpointsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllApiEndpointsResponse.decode(value),
  },
} as const;

export interface ApiEndpointsServiceServer extends UntypedServiceImplementation {
  getAllApiEndpoints: handleUnaryCall<EmptyRequest, GetAllApiEndpointsResponse>;
}

export interface ApiEndpointsServiceClient extends Client {
  getAllApiEndpoints(
    request: EmptyRequest,
    callback: (error: ServiceError | null, response: GetAllApiEndpointsResponse) => void,
  ): ClientUnaryCall;
  getAllApiEndpoints(
    request: EmptyRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllApiEndpointsResponse) => void,
  ): ClientUnaryCall;
  getAllApiEndpoints(
    request: EmptyRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllApiEndpointsResponse) => void,
  ): ClientUnaryCall;
}

export const ApiEndpointsServiceClient = makeGenericClientConstructor(
  ApiEndpointsServiceService,
  "services.registry.api_endpoint.v1.ApiEndpointsService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ApiEndpointsServiceClient;
  service: typeof ApiEndpointsServiceService;
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
