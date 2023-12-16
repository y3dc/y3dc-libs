import { ClientProviderOptions, GrpcOptions } from '@nestjs/microservices';
export declare const ssoGrpcClientOptionsNestJs: ClientProviderOptions;
export declare const catalogGrpcClientOptionsNestJs: ClientProviderOptions;
export declare const notificationGrpcClientOptionsNestJs: ClientProviderOptions;
export declare const orderGrpcClientOptionsNestJs: ClientProviderOptions;
export declare const catalogGrpcServerOptionsNestJs: (url: string) => GrpcOptions;
export declare const notificationGrpcServerOptionsNestJs: (url: string) => GrpcOptions;
