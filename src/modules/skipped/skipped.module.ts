import { Module } from '@nestjs/common';
import { SkippedService } from './skipped.service';
import { SkippedController } from './skipped.controller';

@Module({
  controllers: [SkippedController],
  providers: [SkippedService],
})
export class SkippedModule {}
