import { PickType } from '@nestjs/swagger';
import { Shorts } from '../entities/shorts.entity';

export class CreateShortsDto extends PickType(Shorts, [
  'title',
  'videoUrl',
  'userId',
]) {}
