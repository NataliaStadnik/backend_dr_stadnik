import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto, UpdateArticleDto } from './dto/article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.article.findMany({
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: string) {
    const article = await this.prisma.article.findUnique({
      where: { id },
    });
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async create(createArticleDto: CreateArticleDto) {
    if (createArticleDto.order === undefined) {
      const lastArticle = await this.prisma.article.findFirst({
        orderBy: { order: 'desc' },
      });
      createArticleDto.order = lastArticle ? lastArticle.order + 1 : 0;
    }

    return this.prisma.article.create({
      data: {
        title: createArticleDto.title as any,
        subtitle: createArticleDto.subtitle as any,
        excerpt: createArticleDto.excerpt as any,
        category: createArticleDto.category,
        readTime: createArticleDto.readTime,
        color: createArticleDto.color,
        slug: createArticleDto.slug,
        img: createArticleDto.img,
        content: createArticleDto.content as any,
        order: createArticleDto.order,
      },
    });
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    await this.findOne(id); // Check existence

    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto as any,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Check existence
    return this.prisma.article.delete({
      where: { id },
    });
  }

  async reorder(ids: string[]) {
    const queries = ids.map((id, index) =>
      this.prisma.article.update({
        where: { id },
        data: { order: index },
      }),
    );
    await this.prisma.$transaction(queries);
    return { success: true };
  }
}
