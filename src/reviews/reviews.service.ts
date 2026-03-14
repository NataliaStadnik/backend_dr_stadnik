import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/reviews.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async findAll(isAdmin: boolean = false) {
    return this.prisma.review.findMany({
      where: isAdmin ? undefined : { isVisible: true },
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: string, isAdmin: boolean = false) {
    const review = await this.prisma.review.findUnique({
      where: { id },
    });
    if (!review || (!isAdmin && !review.isVisible)) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  async create(dto: CreateReviewDto) {
    // Автоматически ставим в конец списка
    const count = await this.prisma.review.count();
    return this.prisma.review.create({
      data: { ...dto, order: count },
    });
  }

  async update(id: string, dto: CreateReviewDto) {
    try {
      return await this.prisma.review.update({
        where: { id },
        data: dto,
      });
    } catch {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.review.delete({ where: { id } });
    } catch {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
  }

  async reorder(ids: string[]) {
    return this.prisma.$transaction(
      ids.map((id, index) =>
        this.prisma.review.update({
          where: { id },
          data: { order: index },
        }),
      ),
    );
  }
}
