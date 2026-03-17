import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { ONE_MINUTE_MS } from '../common/constants';
import { ArticlesService } from './articles.service';
import {
  CreateArticleDto,
  ReorderArticlesDto,
  UpdateArticleDto,
} from './dto/article.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ArticleEntity } from './entities/article.entity';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(ONE_MINUTE_MS)
  @Get()
  @ApiOperation({ summary: 'Get list of articles (Public)' })
  @ApiOkResponse({
    description: 'The list of articles has been successfully retrieved.',
    type: [ArticleEntity],
  })
  findAll() {
    return this.articlesService.findAll(false);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Refused to allow access without a valid token',
  })
  @UseGuards(JwtAuthGuard)
  @Get('admin/all')
  @ApiOperation({ summary: 'Get all articles for administration' })
  @ApiOkResponse({ type: [ArticleEntity] })
  @ApiNotFoundResponse({ description: 'Articles not found' })
  findAllAdmin() {
    return this.articlesService.findAll(true);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a single article by ID' })
  @ApiOkResponse({ description: 'The article has been successfully retrieved.', type: ArticleEntity })
  @ApiNotFoundResponse({ description: 'Article not found' })
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create an article' })
  @ApiCreatedResponse({ description: 'The article has been successfully created.', type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Patch('reorder')
  @ApiOperation({ summary: 'Change order of articles' })
  @ApiOkResponse({ description: 'Order updated successfully' })
  reorder(@Body() reorderDto: ReorderArticlesDto) {
    return this.articlesService.reorder(reorderDto.ids);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update an article' })
  @ApiOkResponse({ description: 'The article has been successfully updated.', type: ArticleEntity })
  @ApiNotFoundResponse({ description: 'Article not found' })
  update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an article' })
  @ApiOkResponse({ description: 'The article has been successfully deleted.', type: ArticleEntity })
  @ApiNotFoundResponse({ description: 'Article not found' })
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}
