import { Observable } from "rxjs";
export declare const protobufPackage = "auth";
export interface Authentication {
    Authentication: string;
}
export interface UserMessage {
    id: string;
    email: string;
    password: string;
    roles: string[];
}
export declare const AUTH_PACKAGE_NAME = "auth";
export interface AuthServiceClient {
    authenticate(request: Authentication): Observable<UserMessage>;
}
export interface AuthServiceController {
    authenticate(request: Authentication): Promise<UserMessage> | Observable<UserMessage> | UserMessage;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
//# sourceMappingURL=auth.d.ts.map