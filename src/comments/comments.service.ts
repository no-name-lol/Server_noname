import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCommentDto: CreateCommentDto) {
    return this.prisma.comments.create({
      data: createCommentDto,
    });
  }

  findAll() {
    return this.prisma.comments.findMany();
  }

  findOne(id: number) {
    return this.prisma.comments.findUnique({ where: { commentId: id } });
  }

  update(updateCommentDto: UpdateCommentDto) {
    return this.prisma.comments.update({
      where: { commentId: updateCommentDto.commentId },
      data: updateCommentDto,
    });
  }

  remove(id: number) {
    return this.prisma.comments.delete({ where: { commentId: id } });
  }
}
