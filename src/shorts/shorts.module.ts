import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShortsController } from './shorts.controller';
import { ShortsService } from './shorts.service';

@Module({
  controllers: [ShortsController],
  providers: [ShortsService, PrismaService]
})
export class ShortsModule {}
