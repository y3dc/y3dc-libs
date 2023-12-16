"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationGrpcServerOptionsNestJs = exports.catalogGrpcServerOptionsNestJs = exports.orderGrpcClientOptionsNestJs = exports.notificationGrpcClientOptionsNestJs = exports.catalogGrpcClientOptionsNestJs = exports.ssoGrpcClientOptionsNestJs = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const constants_1 = require("../constants");
const path_constant_1 = require("../constants/path.constant");
exports.ssoGrpcClientOptionsNestJs = {
    name: constants_1.SSO_GRPC_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.SSO_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, path_constant_1.ssoProtoPath),
    },
};
exports.catalogGrpcClientOptionsNestJs = {
    name: constants_1.CATALOG_GRPC_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.CATALOG_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, path_constant_1.catalogProtoPath),
    },
};
exports.notificationGrpcClientOptionsNestJs = {
    name: constants_1.NOTIFICATION_GRPC_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.NOTIFICATION_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, path_constant_1.notificationProtoPath),
    },
};
exports.orderGrpcClientOptionsNestJs = {
    name: constants_1.ORDER_GRPC_NAME,
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.ORDER_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, path_constant_1.orderProtoPath),
    },
};
const catalogGrpcServerOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.CATALOG_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, path_constant_1.catalogProtoPath),
        url,
    },
});
exports.catalogGrpcServerOptionsNestJs = catalogGrpcServerOptionsNestJs;
const notificationGrpcServerOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.NOTIFICATION_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, path_constant_1.notificationProtoPath),
        url,
    },
});
exports.notificationGrpcServerOptionsNestJs = notificationGrpcServerOptionsNestJs;
