import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BrothsModule } from './broths/broths.module';
import { ProteinsModule } from './proteins/proteins.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { VerificationMiddleware } from './middlewares/verification.middleware';

@Module({
  imports: [BrothsModule, ProteinsModule, OrdersModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerificationMiddleware)
      .forRoutes(
        { path: 'proteins', method: RequestMethod.POST },
        { path: 'proteins', method: RequestMethod.PUT },
        { path: 'proteins', method: RequestMethod.DELETE },
        { path: 'broths', method: RequestMethod.POST },
        { path: 'broths', method: RequestMethod.PUT },
        { path: 'broths', method: RequestMethod.DELETE },
      );
  }
}
