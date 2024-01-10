import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateShortsDto } from './create-shorts.dto';

export class UpdateShortsDto extends PartialType(CreateShortsDto) {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  shortsId: number;
}
