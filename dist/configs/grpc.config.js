"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationGrpcServerOptionsNestJs = exports.catalogGrpcServerOptionsNestJs = exports.orderGrpcClientOptionsNestJs = exports.notificationGrpcClientOptionsNestJs = exports.catalogGrpcClientOptionsNestJs = exports.ssoGrpcClientOptionsNestJs = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const constants_1 = require("../constants");
// ====================== config grpc client nestjs ======================
const ssoGrpcClientOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.SSO_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../proto/sso.proto'),
        url,
    },
});
exports.ssoGrpcClientOptionsNestJs = ssoGrpcClientOptionsNestJs;
const catalogGrpcClientOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.CATALOG_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../proto/catalog.proto'),
        url,
    },
});
exports.catalogGrpcClientOptionsNestJs = catalogGrpcClientOptionsNestJs;
const notificationGrpcClientOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.NOTIFICATION_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../proto/notification.proto'),
        url,
    },
});
exports.notificationGrpcClientOptionsNestJs = notificationGrpcClientOptionsNestJs;
const orderGrpcClientOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.ORDER_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../proto/order.proto'),
        url,
    },
});
exports.orderGrpcClientOptionsNestJs = orderGrpcClientOptionsNestJs;
// ====================== config grpc server nestjs ======================
const catalogGrpcServerOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.CATALOG_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../proto/catalog.proto'),
        url,
    },
});
exports.catalogGrpcServerOptionsNestJs = catalogGrpcServerOptionsNestJs;
const notificationGrpcServerOptionsNestJs = (url) => ({
    transport: microservices_1.Transport.GRPC,
    options: {
        package: constants_1.NOTIFICATION_GRPC_PACKAGE_NAME,
        protoPath: (0, path_1.join)(__dirname, '../proto/notification.proto'),
        url,
    },
});
exports.notificationGrpcServerOptionsNestJs = notificationGrpcServerOptionsNestJs;
