import { Injectable } from '@nestjs/common';


@Injectable()
export class ChartsService {
  create(createChartDto: any) {
    return 'This action adds a new chart';
  }

  findAll() {
    return `This action returns all charts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chart`;
  }

  update(id: number, updateChartDto: any) {
    return `This action updates a #${id} chart`;
  }

  remove(id: number) {
    return `This action removes a #${id} chart`;
  }
}
