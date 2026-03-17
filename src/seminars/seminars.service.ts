import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSeminarDto } from './dto/seminar.dto';
import { UpdateSeminarDto } from './dto/update-seminar.dto';

@Injectable()
export class SeminarsService {
  constructor(private prisma: PrismaService) { }

  async findAll(isAdmin: boolean = false) {
    return this.prisma.seminar.findMany({
      where: isAdmin ? undefined : { isVisible: true },
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: number) {
    const seminar = await this.prisma.seminar.findUnique({
      where: { id },
    });
    if (!seminar) {
      throw new NotFoundException(`Seminar #${id} not found`);
    }
    return seminar;
  }

  async create(createSeminarDto: CreateSeminarDto) {
    if (createSeminarDto.order === undefined) {
      const lastSeminar = await this.prisma.seminar.findFirst({
        orderBy: { order: 'desc' },
      });
      createSeminarDto.order = lastSeminar ? lastSeminar.order + 1 : 0;
    }

    return this.prisma.seminar.create({
      data: {
        title: createSeminarDto.title as any,
        date: new Date(createSeminarDto.date),
        location: createSeminarDto.location as any,
        link: createSeminarDto.link,
        logoLink: createSeminarDto.logoLink,
        logoTitle: createSeminarDto.logoTitle,
        description: createSeminarDto.description as any,
        images: createSeminarDto.images,
        order: createSeminarDto.order,
        isVisible: false,
      },
    });
  }

  async update(id: number, updateSeminarDto: UpdateSeminarDto) {
    await this.findOne(id); // Check existence

    const data: any = { ...updateSeminarDto };
    if (updateSeminarDto.date) {
      data.date = new Date(updateSeminarDto.date);
    }

    return this.prisma.seminar.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Check existence
    return this.prisma.seminar.delete({
      where: { id },
    });
  }

  async reorder(ids: number[]) {
    const queries = ids.map((id, index) =>
      this.prisma.seminar.update({
        where: { id },
        data: { order: index },
      }),
    );
    await this.prisma.$transaction(queries);
    return { success: true };
  }
}
