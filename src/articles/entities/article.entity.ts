import { ApiProperty, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { Article, ArticleCategory } from '../../generated/client';
import { 
  LocalizedStringDto,
  ArticleBlockSimpleTextDto,
  ArticleBlockArticleSectionDto,
  ArticleBlockUnorderListDto,
  ArticleBlockUnorderListWithTitlesDto,
  ArticleBlockOrderListDto,
  ArticleBlockArticleInfoBlockDto,
  ArticleBlockKeyFindingsBlockDto,
} from './../dto/article.dto';

@ApiExtraModels(
  ArticleBlockSimpleTextDto,
  ArticleBlockArticleSectionDto,
  ArticleBlockUnorderListDto,
  ArticleBlockUnorderListWithTitlesDto,
  ArticleBlockOrderListDto,
  ArticleBlockArticleInfoBlockDto,
  ArticleBlockKeyFindingsBlockDto,
)
export class ArticleEntity implements Article {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: LocalizedStringDto })
  title: any;

  @ApiProperty({ type: LocalizedStringDto })
  subtitle: any;

  @ApiProperty({ type: LocalizedStringDto })
  excerpt: any;

  @ApiProperty({ enum: ArticleCategory })
  category: ArticleCategory;

  @ApiProperty()
  readTime: string;

  @ApiProperty()
  color: string;

  @ApiProperty()
  slug: string;

  @ApiProperty({ required: false })
  img: string | null;

  @ApiProperty({
    description: 'Array of varying ArticleBlock objects',
    type: 'array',
    items: {
      oneOf: [
        { $ref: getSchemaPath(ArticleBlockSimpleTextDto) },
        { $ref: getSchemaPath(ArticleBlockArticleSectionDto) },
        { $ref: getSchemaPath(ArticleBlockUnorderListDto) },
        { $ref: getSchemaPath(ArticleBlockUnorderListWithTitlesDto) },
        { $ref: getSchemaPath(ArticleBlockOrderListDto) },
        { $ref: getSchemaPath(ArticleBlockArticleInfoBlockDto) },
        { $ref: getSchemaPath(ArticleBlockKeyFindingsBlockDto) },
      ],
    },
  })
  content: any;

  @ApiProperty()
  order: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: true })
  isVisible: boolean;
}
