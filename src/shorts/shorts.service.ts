import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateShortsDto } from './dto/create-shorts.dto';
import { UpdateShortsDto } from './dto/update-shorts.dto';

@Injectable()
export class ShortsService {
    constructor(private readonly prisma: PrismaService) {}
    create(createShortsDto: CreateShortsDto) {
        return this.prisma.shorts.create({
            data: createShortsDto
        })
    }

    findAll() {
        return this.prisma.shorts.findMany();
    }

    findOne(id: number) {
        return this.prisma.shorts.findUnique({ where: { shortsId: id } })
    }

    update(updateShortsDto: UpdateShortsDto) {
        return this.prisma.shorts.update({
            where: { shortsId: updateShortsDto.shortsId},
            data: updateShortsDto
        })
    }

    remove(id: number) {
        return this.prisma.shorts.delete({ where: {shortsId: id} })
    }
}
