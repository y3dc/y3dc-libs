"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AUTH_PACKAGE_NAME: () => AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME: () => AUTH_SERVICE_NAME,
  AuthServiceControllerMethods: () => AuthServiceControllerMethods,
  protobufPackage: () => protobufPackage
});
module.exports = __toCommonJS(src_exports);

// src/proto/auth.ts
var import_microservices = require("@nestjs/microservices");
var protobufPackage = "auth";
var AUTH_PACKAGE_NAME = "auth";
function AuthServiceControllerMethods() {
  return function(constructor) {
    const grpcMethods = ["authenticate"];
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices.GrpcMethod)("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      (0, import_microservices.GrpcStreamMethod)("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}
var AUTH_SERVICE_NAME = "AuthService";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  AuthServiceControllerMethods,
  protobufPackage
});
