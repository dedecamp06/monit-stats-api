import { Module } from '@nestjs/common';
import { ChartsModule } from './modules/charts.module';

@Module({
  imports: [ChartsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
