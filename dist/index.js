'use strict'
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __hasOwnProp = Object.prototype.hasOwnProperty
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true })
}
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// src/index.ts
var src_exports = {}
__export(src_exports, {
  AUTH_PACKAGE_NAME: () => AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME: () => AUTH_SERVICE_NAME,
  AuthServiceControllerMethods: () => AuthServiceControllerMethods,
  HttpStatus: () => HttpStatus,
  protobufPackage: () => protobufPackage,
  test: () => test,
})
module.exports = __toCommonJS(src_exports)

// src/configs/grpc.config.ts
var test = 'test'

// src/enums/http-status.enum.ts
var HttpStatus = /* @__PURE__ */ ((HttpStatus2) => {
  HttpStatus2[(HttpStatus2['CONTINUE'] = 100)] = 'CONTINUE'
  HttpStatus2[(HttpStatus2['SWITCHING_PROTOCOLS'] = 101)] = 'SWITCHING_PROTOCOLS'
  HttpStatus2[(HttpStatus2['PROCESSING'] = 102)] = 'PROCESSING'
  HttpStatus2[(HttpStatus2['EARLYHINTS'] = 103)] = 'EARLYHINTS'
  HttpStatus2[(HttpStatus2['OK'] = 200)] = 'OK'
  HttpStatus2[(HttpStatus2['CREATED'] = 201)] = 'CREATED'
  HttpStatus2[(HttpStatus2['ACCEPTED'] = 202)] = 'ACCEPTED'
  HttpStatus2[(HttpStatus2['NON_AUTHORITATIVE_INFORMATION'] = 203)] =
    'NON_AUTHORITATIVE_INFORMATION'
  HttpStatus2[(HttpStatus2['NO_CONTENT'] = 204)] = 'NO_CONTENT'
  HttpStatus2[(HttpStatus2['RESET_CONTENT'] = 205)] = 'RESET_CONTENT'
  HttpStatus2[(HttpStatus2['PARTIAL_CONTENT'] = 206)] = 'PARTIAL_CONTENT'
  HttpStatus2[(HttpStatus2['AMBIGUOUS'] = 300)] = 'AMBIGUOUS'
  HttpStatus2[(HttpStatus2['MOVED_PERMANENTLY'] = 301)] = 'MOVED_PERMANENTLY'
  HttpStatus2[(HttpStatus2['FOUND'] = 302)] = 'FOUND'
  HttpStatus2[(HttpStatus2['SEE_OTHER'] = 303)] = 'SEE_OTHER'
  HttpStatus2[(HttpStatus2['NOT_MODIFIED'] = 304)] = 'NOT_MODIFIED'
  HttpStatus2[(HttpStatus2['TEMPORARY_REDIRECT'] = 307)] = 'TEMPORARY_REDIRECT'
  HttpStatus2[(HttpStatus2['PERMANENT_REDIRECT'] = 308)] = 'PERMANENT_REDIRECT'
  HttpStatus2[(HttpStatus2['BAD_REQUEST'] = 400)] = 'BAD_REQUEST'
  HttpStatus2[(HttpStatus2['UNAUTHORIZED'] = 401)] = 'UNAUTHORIZED'
  HttpStatus2[(HttpStatus2['PAYMENT_REQUIRED'] = 402)] = 'PAYMENT_REQUIRED'
  HttpStatus2[(HttpStatus2['FORBIDDEN'] = 403)] = 'FORBIDDEN'
  HttpStatus2[(HttpStatus2['NOT_FOUND'] = 404)] = 'NOT_FOUND'
  HttpStatus2[(HttpStatus2['METHOD_NOT_ALLOWED'] = 405)] = 'METHOD_NOT_ALLOWED'
  HttpStatus2[(HttpStatus2['NOT_ACCEPTABLE'] = 406)] = 'NOT_ACCEPTABLE'
  HttpStatus2[(HttpStatus2['PROXY_AUTHENTICATION_REQUIRED'] = 407)] =
    'PROXY_AUTHENTICATION_REQUIRED'
  HttpStatus2[(HttpStatus2['REQUEST_TIMEOUT'] = 408)] = 'REQUEST_TIMEOUT'
  HttpStatus2[(HttpStatus2['CONFLICT'] = 409)] = 'CONFLICT'
  HttpStatus2[(HttpStatus2['GONE'] = 410)] = 'GONE'
  HttpStatus2[(HttpStatus2['LENGTH_REQUIRED'] = 411)] = 'LENGTH_REQUIRED'
  HttpStatus2[(HttpStatus2['PRECONDITION_FAILED'] = 412)] = 'PRECONDITION_FAILED'
  HttpStatus2[(HttpStatus2['PAYLOAD_TOO_LARGE'] = 413)] = 'PAYLOAD_TOO_LARGE'
  HttpStatus2[(HttpStatus2['URI_TOO_LONG'] = 414)] = 'URI_TOO_LONG'
  HttpStatus2[(HttpStatus2['UNSUPPORTED_MEDIA_TYPE'] = 415)] = 'UNSUPPORTED_MEDIA_TYPE'
  HttpStatus2[(HttpStatus2['REQUESTED_RANGE_NOT_SATISFIABLE'] = 416)] =
    'REQUESTED_RANGE_NOT_SATISFIABLE'
  HttpStatus2[(HttpStatus2['EXPECTATION_FAILED'] = 417)] = 'EXPECTATION_FAILED'
  HttpStatus2[(HttpStatus2['I_AM_A_TEAPOT'] = 418)] = 'I_AM_A_TEAPOT'
  HttpStatus2[(HttpStatus2['MISDIRECTED'] = 421)] = 'MISDIRECTED'
  HttpStatus2[(HttpStatus2['UNPROCESSABLE_ENTITY'] = 422)] = 'UNPROCESSABLE_ENTITY'
  HttpStatus2[(HttpStatus2['FAILED_DEPENDENCY'] = 424)] = 'FAILED_DEPENDENCY'
  HttpStatus2[(HttpStatus2['TOO_MANY_REQUESTS'] = 429)] = 'TOO_MANY_REQUESTS'
  HttpStatus2[(HttpStatus2['INTERNAL_SERVER_ERROR'] = 500)] = 'INTERNAL_SERVER_ERROR'
  HttpStatus2[(HttpStatus2['NOT_IMPLEMENTED'] = 501)] = 'NOT_IMPLEMENTED'
  HttpStatus2[(HttpStatus2['BAD_GATEWAY'] = 502)] = 'BAD_GATEWAY'
  HttpStatus2[(HttpStatus2['SERVICE_UNAVAILABLE'] = 503)] = 'SERVICE_UNAVAILABLE'
  HttpStatus2[(HttpStatus2['GATEWAY_TIMEOUT'] = 504)] = 'GATEWAY_TIMEOUT'
  HttpStatus2[(HttpStatus2['HTTP_VERSION_NOT_SUPPORTED'] = 505)] = 'HTTP_VERSION_NOT_SUPPORTED'
  return HttpStatus2
})(HttpStatus || {})

// src/proto/auth.ts
var import_microservices = require('@nestjs/microservices')
var protobufPackage = 'auth'
var AUTH_PACKAGE_NAME = 'auth'
function AuthServiceControllerMethods() {
  return function (constructor) {
    const grpcMethods = ['authenticate']
    for (const method of grpcMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method)
      ;(0, import_microservices.GrpcMethod)('AuthService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      )
    }
    const grpcStreamMethods = []
    for (const method of grpcStreamMethods) {
      const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method)
      ;(0, import_microservices.GrpcStreamMethod)('AuthService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      )
    }
  }
}
var AUTH_SERVICE_NAME = 'AuthService'
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    AUTH_PACKAGE_NAME,
    AUTH_SERVICE_NAME,
    AuthServiceControllerMethods,
    HttpStatus,
    protobufPackage,
    test,
  })
