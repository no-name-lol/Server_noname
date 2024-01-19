import { ApiProperty } from '@nestjs/swagger';
import { comments } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class Comments implements comments {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  commentId: number;

  @ApiProperty({ example: 'comment' })
  @IsString()
  content: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  shortsId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  userId: number;

  @IsOptional()
  createdAt: Date;
  @IsOptional()
  updatedAt: Date;
}
