/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientReadableStream,
  ClientUnaryCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export enum ServingStatus {
  UNKNOWN = "UNKNOWN",
  SERVING = "SERVING",
  NOT_SERVING = "NOT_SERVING",
  /** SERVICE_UNKNOWN - Used only by the Watch method. */
  SERVICE_UNKNOWN = "SERVICE_UNKNOWN",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function servingStatusFromJSON(object: any): ServingStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ServingStatus.UNKNOWN;
    case 1:
    case "SERVING":
      return ServingStatus.SERVING;
    case 2:
    case "NOT_SERVING":
      return ServingStatus.NOT_SERVING;
    case 3:
    case "SERVICE_UNKNOWN":
      return ServingStatus.SERVICE_UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServingStatus.UNRECOGNIZED;
  }
}

export function servingStatusToJSON(object: ServingStatus): string {
  switch (object) {
    case ServingStatus.UNKNOWN:
      return "UNKNOWN";
    case ServingStatus.SERVING:
      return "SERVING";
    case ServingStatus.NOT_SERVING:
      return "NOT_SERVING";
    case ServingStatus.SERVICE_UNKNOWN:
      return "SERVICE_UNKNOWN";
    case ServingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function servingStatusToNumber(object: ServingStatus): number {
  switch (object) {
    case ServingStatus.UNKNOWN:
      return 0;
    case ServingStatus.SERVING:
      return 1;
    case ServingStatus.NOT_SERVING:
      return 2;
    case ServingStatus.SERVICE_UNKNOWN:
      return 3;
    case ServingStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CheckRequest {
  service: string;
}

export interface WatchRequest {
  service: string;
}

export interface CheckResponse {
  status: ServingStatus;
}

export interface WatchResponse {
  status: ServingStatus;
}

function createBaseCheckRequest(): CheckRequest {
  return { service: "" };
}

export const CheckRequest = {
  encode(message: CheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckRequest {
    return { service: isSet(object.service) ? String(object.service) : "" };
  },

  toJSON(message: CheckRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckRequest>, I>>(base?: I): CheckRequest {
    return CheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckRequest>, I>>(object: I): CheckRequest {
    const message = createBaseCheckRequest();
    message.service = object.service ?? "";
    return message;
  },
};

function createBaseWatchRequest(): WatchRequest {
  return { service: "" };
}

export const WatchRequest = {
  encode(message: WatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WatchRequest {
    return { service: isSet(object.service) ? String(object.service) : "" };
  },

  toJSON(message: WatchRequest): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    return obj;
  },

  create<I extends Exact<DeepPartial<WatchRequest>, I>>(base?: I): WatchRequest {
    return WatchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WatchRequest>, I>>(object: I): WatchRequest {
    const message = createBaseWatchRequest();
    message.service = object.service ?? "";
    return message;
  },
};

function createBaseCheckResponse(): CheckResponse {
  return { status: ServingStatus.UNKNOWN };
}

export const CheckResponse = {
  encode(message: CheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== ServingStatus.UNKNOWN) {
      writer.uint32(8).int32(servingStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = servingStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckResponse {
    return { status: isSet(object.status) ? servingStatusFromJSON(object.status) : ServingStatus.UNKNOWN };
  },

  toJSON(message: CheckResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = servingStatusToJSON(message.status));
    return obj;
  },

  create<I extends Exact<DeepPartial<CheckResponse>, I>>(base?: I): CheckResponse {
    return CheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CheckResponse>, I>>(object: I): CheckResponse {
    const message = createBaseCheckResponse();
    message.status = object.status ?? ServingStatus.UNKNOWN;
    return message;
  },
};

function createBaseWatchResponse(): WatchResponse {
  return { status: ServingStatus.UNKNOWN };
}

export const WatchResponse = {
  encode(message: WatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== ServingStatus.UNKNOWN) {
      writer.uint32(8).int32(servingStatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = servingStatusFromJSON(reader.int32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WatchResponse {
    return { status: isSet(object.status) ? servingStatusFromJSON(object.status) : ServingStatus.UNKNOWN };
  },

  toJSON(message: WatchResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = servingStatusToJSON(message.status));
    return obj;
  },

  create<I extends Exact<DeepPartial<WatchResponse>, I>>(base?: I): WatchResponse {
    return WatchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WatchResponse>, I>>(object: I): WatchResponse {
    const message = createBaseWatchResponse();
    message.status = object.status ?? ServingStatus.UNKNOWN;
    return message;
  },
};

export type HealthServiceService = typeof HealthServiceService;
export const HealthServiceService = {
  /**
   * If the requested service is unknown, the call will fail with status
   * NOT_FOUND.
   */
  check: {
    path: "/services.health.v1.HealthService/Check",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CheckRequest) => Buffer.from(CheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CheckRequest.decode(value),
    responseSerialize: (value: CheckResponse) => Buffer.from(CheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CheckResponse.decode(value),
  },
  /**
   * Performs a watch for the serving status of the requested service.
   * The server will immediately send back a message indicating the current
   * serving status.  It will then subsequently send a new message whenever
   * the service's serving status changes.
   *
   * If the requested service is unknown when the call is received, the
   * server will send a message setting the serving status to
   * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
   * future point, the serving status of the service becomes known, the
   * server will send a new message with the service's serving status.
   *
   * If the call terminates with status UNIMPLEMENTED, then clients
   * should assume this method is not supported and should not retry the
   * call.  If the call terminates with any other status (including OK),
   * clients should retry the call with appropriate exponential backoff.
   */
  watch: {
    path: "/services.health.v1.HealthService/Watch",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: WatchRequest) => Buffer.from(WatchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => WatchRequest.decode(value),
    responseSerialize: (value: WatchResponse) => Buffer.from(WatchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => WatchResponse.decode(value),
  },
} as const;

export interface HealthServiceServer extends UntypedServiceImplementation {
  /**
   * If the requested service is unknown, the call will fail with status
   * NOT_FOUND.
   */
  check: handleUnaryCall<CheckRequest, CheckResponse>;
  /**
   * Performs a watch for the serving status of the requested service.
   * The server will immediately send back a message indicating the current
   * serving status.  It will then subsequently send a new message whenever
   * the service's serving status changes.
   *
   * If the requested service is unknown when the call is received, the
   * server will send a message setting the serving status to
   * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
   * future point, the serving status of the service becomes known, the
   * server will send a new message with the service's serving status.
   *
   * If the call terminates with status UNIMPLEMENTED, then clients
   * should assume this method is not supported and should not retry the
   * call.  If the call terminates with any other status (including OK),
   * clients should retry the call with appropriate exponential backoff.
   */
  watch: handleServerStreamingCall<WatchRequest, WatchResponse>;
}

export interface HealthServiceClient extends Client {
  /**
   * If the requested service is unknown, the call will fail with status
   * NOT_FOUND.
   */
  check(
    request: CheckRequest,
    callback: (error: ServiceError | null, response: CheckResponse) => void,
  ): ClientUnaryCall;
  check(
    request: CheckRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CheckResponse) => void,
  ): ClientUnaryCall;
  check(
    request: CheckRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CheckResponse) => void,
  ): ClientUnaryCall;
  /**
   * Performs a watch for the serving status of the requested service.
   * The server will immediately send back a message indicating the current
   * serving status.  It will then subsequently send a new message whenever
   * the service's serving status changes.
   *
   * If the requested service is unknown when the call is received, the
   * server will send a message setting the serving status to
   * SERVICE_UNKNOWN but will *not* terminate the call.  If at some
   * future point, the serving status of the service becomes known, the
   * server will send a new message with the service's serving status.
   *
   * If the call terminates with status UNIMPLEMENTED, then clients
   * should assume this method is not supported and should not retry the
   * call.  If the call terminates with any other status (including OK),
   * clients should retry the call with appropriate exponential backoff.
   */
  watch(request: WatchRequest, options?: Partial<CallOptions>): ClientReadableStream<WatchResponse>;
  watch(
    request: WatchRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<WatchResponse>;
}

export const HealthServiceClient = makeGenericClientConstructor(
  HealthServiceService,
  "services.health.v1.HealthService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HealthServiceClient;
  service: typeof HealthServiceService;
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
