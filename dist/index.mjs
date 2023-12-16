// src/proto/auth.ts
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
var protobufPackage = "auth";
var AUTH_PACKAGE_NAME = "auth";
function AuthServiceControllerMethods() {
  return function(constructor) {
    const grpcMethods = ["authenticate"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}
var AUTH_SERVICE_NAME = "AuthService";
export {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  AuthServiceControllerMethods,
  protobufPackage
};
