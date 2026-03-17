import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiNotFoundResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DashboardStatsDto } from './dto/dashboard-stats.dto';

@ApiTags('Dashboard')
@ApiBearerAuth()
@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) { }

  @Get('stats')
  @ApiOperation({ summary: 'Get aggregate statistics' })
  @ApiNotFoundResponse({ description: 'Statistics not found' })
  @ApiUnauthorizedResponse({
    description: 'Refused to allow access without a valid token',
  })
  @ApiResponse({ status: 200, description: 'Return counts for articles, seminars, reviews, and users.', type: DashboardStatsDto })
  async getStats(): Promise<DashboardStatsDto> {
    return this.dashboardService.getStats();
  }
}
