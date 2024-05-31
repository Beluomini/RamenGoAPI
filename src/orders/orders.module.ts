import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/PrismaService';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  imports: [HttpModule],
})
export class OrdersModule {}
