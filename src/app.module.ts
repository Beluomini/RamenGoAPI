import { Module } from '@nestjs/common';
import { BrothsModule } from './broths/broths.module';
import { ProteinsModule } from './proteins/proteins.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [BrothsModule, ProteinsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
