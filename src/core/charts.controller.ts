import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartsService } from '../services/charts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Charts } from 'src/entities/charts.entity';

@ApiTags('API Monit - Charts')
@Controller('charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Charts' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createChartDto: any) {
    return this.chartsService.create(createChartDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Charts,
  })
  findAll() {
    return this.chartsService.findAll();
  }

  @Get(':id')
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Charts,
  })
  findOne(@Param('id') id: string) {
    return this.chartsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Chart' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(@Param('id') id: string, @Body() updateChartDto: any) {
    return this.chartsService.update(+id, updateChartDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Chart' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: string) {
    return this.chartsService.remove(+id);
  }
}
