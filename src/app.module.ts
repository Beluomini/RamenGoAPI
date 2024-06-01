import { Module } from '@nestjs/common';
import { BrothsModule } from './broths/broths.module';
import { ProteinsModule } from './proteins/proteins.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BrothsModule, ProteinsModule, OrdersModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
