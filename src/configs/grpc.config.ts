import {
  ClientProvider,
  GrpcOptions,
  Transport
} from '@nestjs/microservices'
import { join } from 'path'
import {
  CATALOG_GRPC_PACKAGE_NAME,
  NOTIFICATION_GRPC_PACKAGE_NAME,
  ORDER_GRPC_PACKAGE_NAME,
  SSO_GRPC_PACKAGE_NAME
} from '../constants'

// ====================== config grpc client nestjs ======================
export const ssoGrpcClientOptionsNestJs = (url: string): ClientProvider => ({
  transport: Transport.GRPC,
  options: {
    package: SSO_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/sso.proto'),
    url,
  },
})

export const catalogGrpcClientOptionsNestJs = (url: string): ClientProvider => ({
  transport: Transport.GRPC,
  options: {
    package: CATALOG_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/catalog.proto'),
    url,
  },
})

export const notificationGrpcClientOptionsNestJs = (url: string): ClientProvider => ({
  transport: Transport.GRPC,
  options: {
    package: NOTIFICATION_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/notification.proto'),
    url,
  },
})

export const orderGrpcClientOptionsNestJs = (url: string): ClientProvider => ({
  transport: Transport.GRPC,
  options: {
    package: ORDER_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/order.proto'),
    url,
  },
})

// ====================== config grpc server nestjs ======================
export const catalogGrpcServerOptionsNestJs = (url: string): GrpcOptions => ({
  transport: Transport.GRPC,
  options: {
    package: CATALOG_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/catalog.proto'),
    url,
  },
})

export const notificationGrpcServerOptionsNestJs = (url: string): GrpcOptions => ({
  transport: Transport.GRPC,
  options: {
    package: NOTIFICATION_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, '../proto/notification.proto'),
    url,
  },
})
