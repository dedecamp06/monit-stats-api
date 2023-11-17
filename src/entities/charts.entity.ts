import { ApiProperty } from '@nestjs/swagger';

export class Charts {
  /**
   * The name of the Cat
   * @example Charts Model
   */
  name: string;

  @ApiProperty({ example: 1, description: 'The number of charts' })
  number: number;

  @ApiProperty({
    example: 'Brazil',
    description: 'The locale is Brazil',
  })
  locale: string;
}