import { Module } from '@nestjs/common';
import { BrothsService } from './broths.service';
import { BrothsController } from './broths.controller';
import { PrismaService } from '../PrismaService';

@Module({
  controllers: [BrothsController],
  providers: [BrothsService, PrismaService],
})
export class BrothsModule {}
