import { ApiProperty } from '@nestjs/swagger';
import { shorts } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class Shorts implements shorts {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  shortsId: number;

  @ApiProperty({ example: 'title' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'sadf.pdf' })
  @IsNumber()
  videoUrl: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  userId: number;

  @IsOptional()
  createdAt: Date;
  @IsOptional()
  updatedAt: Date;
}
