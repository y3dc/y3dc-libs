import { Observable } from 'rxjs';

declare const test = "test";

declare const SSO_SERVICE_NAME = "SSO_SERVICE_NAME";
declare const CATALOG_SERVICE_NAME = "CATALOG_SERVICE_NAME";
declare const NOTIFICATION_SERVICE_NAME = "NOTIFICATION_SERVICE_NAME";
declare const ORDER_SERVICE_NAME = "ORDER_SERVICE_NAME";
declare const SSO_GRPC_NAME = "SSO_GRPC_NAME";
declare const CATALOG_GRPC_NAME = "CATALOG_GRPC_NAME";
declare const NOTIFICATION_GRPC_NAME = "NOTIFICATION_GRPC_NAME";
declare const ORDER_GRPC_NAME = "ORDER_GRPC_NAME";
declare const SSO_GRPC_PACKAGE_NAME = "sso";
declare const CATALOG_GRPC_PACKAGE_NAME = "catalog";
declare const NOTIFICATION_GRPC_PACKAGE_NAME = "notification";
declare const ORDER_GRPC_PACKAGE_NAME = "order";
declare const SSO_RMQ_NAME = "SSO_RMQ_NAME";
declare const CATALOG_RMQ_NAME = "CATALOG_RMQ_NAME";
declare const NOTIFICATION_RMQ_NAME = "NOTIFICATION_RMQ_NAME";
declare const ORDER_RMQ_NAME = "ORDER_RMQ_NAME";

declare const ssoProtoPath = "./dist/sso.proto";
declare const catalogProtoPath = "./dist/catalog.proto";
declare const notificationProtoPath = "./dist/notification.proto";
declare const orderProtoPath = "./dist/order.proto";

declare enum HttpStatus {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLYHINTS = 103,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    AMBIGUOUS = 300,
    MOVED_PERMANENTLY = 301,
    FOUND = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    PAYLOAD_TOO_LARGE = 413,
    URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    I_AM_A_TEAPOT = 418,
    MISDIRECTED = 421,
    UNPROCESSABLE_ENTITY = 422,
    FAILED_DEPENDENCY = 424,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505
}

declare const protobufPackage = "auth";
interface Authentication {
    Authentication: string;
}
interface UserMessage {
    id: string;
    email: string;
    password: string;
    roles: string[];
}
declare const AUTH_PACKAGE_NAME = "auth";
interface AuthServiceClient {
    authenticate(request: Authentication): Observable<UserMessage>;
}
interface AuthServiceController {
    authenticate(request: Authentication): Promise<UserMessage> | Observable<UserMessage> | UserMessage;
}
declare function AuthServiceControllerMethods(): (constructor: Function) => void;
declare const AUTH_SERVICE_NAME = "AuthService";

export { AUTH_PACKAGE_NAME, AUTH_SERVICE_NAME, type AuthServiceClient, type AuthServiceController, AuthServiceControllerMethods, type Authentication, CATALOG_GRPC_NAME, CATALOG_GRPC_PACKAGE_NAME, CATALOG_RMQ_NAME, CATALOG_SERVICE_NAME, HttpStatus, NOTIFICATION_GRPC_NAME, NOTIFICATION_GRPC_PACKAGE_NAME, NOTIFICATION_RMQ_NAME, NOTIFICATION_SERVICE_NAME, ORDER_GRPC_NAME, ORDER_GRPC_PACKAGE_NAME, ORDER_RMQ_NAME, ORDER_SERVICE_NAME, SSO_GRPC_NAME, SSO_GRPC_PACKAGE_NAME, SSO_RMQ_NAME, SSO_SERVICE_NAME, type UserMessage, catalogProtoPath, notificationProtoPath, orderProtoPath, protobufPackage, ssoProtoPath, test };
