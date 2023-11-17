import { Module } from '@nestjs/common';
import { ChartsService } from '../services/charts.service';
import { ChartsController } from '../core/charts.controller';

@Module({
  controllers: [ChartsController],
  providers: [ChartsService],
})
export class ChartsModule {}
