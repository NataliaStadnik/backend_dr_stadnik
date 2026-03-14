import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto, ReorderReviewsDto } from './dto/reviews.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalJwtAuthGuard } from '../auth/guards/optional-jwt-auth.guard';
import { ReviewEntity } from './entities/review.entity';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(OptionalJwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get list of reviews' })
  @ApiOkResponse({
    description: 'The list of reviews has been successfully retrieved.',
    type: [ReviewEntity],
  })
  findAll(@Req() req: any) {
    const isAdmin = !!req.user;
    return this.reviewsService.findAll(isAdmin);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Refused to allow access without a valid token',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a single review by ID' })
  @ApiOkResponse({
    description: 'The review has been successfully retrieved.',
    type: ReviewEntity,
  })
  @ApiNotFoundResponse({ description: 'Review not found' })
  findOne(@Param('id') id: string) {
    // strict guard guarantees an admin/user, so we pass isAdmin = true
    return this.reviewsService.findOne(id, true);
  }

  @Post()
  @ApiOperation({ summary: 'Create review' })
  @ApiCreatedResponse({
    description: 'The review has been successfully created.',
    type: ReviewEntity,
  })
  create(@Body() dto: CreateReviewDto) {
    return this.reviewsService.create(dto);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Refused to allow access without a valid token',
  })
  @UseGuards(JwtAuthGuard)
  @Put('reorder')
  @ApiOperation({ summary: 'Change order of reviews' })
  @ApiOkResponse({ description: 'Order updated successfully' })
  reorder(@Body() dto: ReorderReviewsDto) {
    return this.reviewsService.reorder(dto.ids);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Refused to allow access without a valid token',
  })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update review' })
  @ApiOkResponse({
    description: 'The review has been successfully updated.',
    type: ReviewEntity,
  })
  @ApiNotFoundResponse({ description: 'Review not found' })
  update(@Param('id') id: string, @Body() dto: CreateReviewDto) {
    return this.reviewsService.update(id, dto);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Refused to allow access without a valid token',
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete review' })
  @ApiOkResponse({ description: 'The review has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Review not found' })
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
