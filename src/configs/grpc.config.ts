import { ClientProviderOptions, GrpcOptions, Transport } from '@nestjs/microservices'
import { join } from 'path'
import {
  CATALOG_GRPC_NAME,
  CATALOG_GRPC_PACKAGE_NAME,
  NOTIFICATION_GRPC_NAME,
  NOTIFICATION_GRPC_PACKAGE_NAME,
  ORDER_GRPC_NAME,
  ORDER_GRPC_PACKAGE_NAME,
  SSO_GRPC_NAME,
  SSO_GRPC_PACKAGE_NAME,
} from '../constants'
import {
  catalogProtoPath,
  notificationProtoPath,
  orderProtoPath,
  ssoProtoPath,
} from '../constants/path.constant'

export const ssoGrpcClientOptionsNestJs: ClientProviderOptions = {
  name: SSO_GRPC_NAME,
  transport: Transport.GRPC,
  options: {
    package: SSO_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, ssoProtoPath),
  },
}

export const catalogGrpcClientOptionsNestJs: ClientProviderOptions = {
  name: CATALOG_GRPC_NAME,
  transport: Transport.GRPC,
  options: {
    package: CATALOG_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, catalogProtoPath),
  },
}

export const notificationGrpcClientOptionsNestJs: ClientProviderOptions = {
  name: NOTIFICATION_GRPC_NAME,
  transport: Transport.GRPC,
  options: {
    package: NOTIFICATION_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, notificationProtoPath),
  },
}

export const orderGrpcClientOptionsNestJs: ClientProviderOptions = {
  name: ORDER_GRPC_NAME,
  transport: Transport.GRPC,
  options: {
    package: ORDER_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, orderProtoPath),
  },
}

export const catalogGrpcServerOptionsNestJs = (url: string): GrpcOptions => ({
  transport: Transport.GRPC,
  options: {
    package: CATALOG_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, catalogProtoPath),
    url,
  },
})

export const notificationGrpcServerOptionsNestJs = (url: string): GrpcOptions => ({
  transport: Transport.GRPC,
  options: {
    package: NOTIFICATION_GRPC_PACKAGE_NAME,
    protoPath: join(__dirname, notificationProtoPath),
    url,
  },
})
