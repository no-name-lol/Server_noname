import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShortsService } from './shorts.service';
import { CreateShortsDto } from './dto/create-shorts.dto';
import { UpdateShortsDto } from './dto/update-shorts.dto';

@ApiTags('shorts')
@Controller('shorts')
export class ShortsController {
    constructor(private readonly shortsService: ShortsService) {}

  @Post()
  create(@Body() createShortsDto: CreateShortsDto) {
    return this.shortsService.create(createShortsDto);
  }

  @Get()
  findAll() {
    return this.shortsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.shortsService.findOne(id);
  }

  @Patch()
  update(@Body() updateShortsDto: UpdateShortsDto) {
    return this.shortsService.update(updateShortsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.shortsService.remove(id);
  }
}
