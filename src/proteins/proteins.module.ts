import { Module } from '@nestjs/common';
import { ProteinsService } from './proteins.service';
import { ProteinsController } from './proteins.controller';
import { PrismaService } from 'src/PrismaService';

@Module({
  controllers: [ProteinsController],
  providers: [ProteinsService, PrismaService],
})
export class ProteinsModule {}
