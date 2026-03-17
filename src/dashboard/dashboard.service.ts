import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DashboardStatsDto } from './dto/dashboard-stats.dto';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getStats(): Promise<DashboardStatsDto> {
    const [
      articleCount,
      visibleArticleCount,
      seminarCount,
      visibleSeminarCount,
      reviewCount,
      visibleReviewCount,
      userCount,
    ] = await Promise.all([
      this.prisma.article.count(),
      this.prisma.article.count({ where: { isVisible: true } }),
      this.prisma.seminar.count(),
      this.prisma.seminar.count({ where: { isVisible: true } }),
      this.prisma.review.count(),
      this.prisma.review.count({ where: { isVisible: true } }),
      this.prisma.user.count(),
    ]);

    return {
      articles: {
        total: articleCount,
        visible: visibleArticleCount,
        hidden: articleCount - visibleArticleCount,
      },
      seminars: {
        total: seminarCount,
        visible: visibleSeminarCount,
        hidden: seminarCount - visibleSeminarCount,
      },
      reviews: {
        total: reviewCount,
        visible: visibleReviewCount,
        hidden: reviewCount - visibleReviewCount,
      },
      users: {
        total: userCount,
      },
    };
  }
}
