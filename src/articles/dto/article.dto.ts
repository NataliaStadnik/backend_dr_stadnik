import { ApiProperty, ApiExtraModels, PartialType, getSchemaPath } from '@nestjs/swagger';
import {
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  IsObject,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ArticleCategory } from '../../generated/client';

export class LocalizedStringDto {
  @ApiProperty()
  @IsString()
  ru: string;

  @ApiProperty()
  @IsString()
  en: string;

  @ApiProperty()
  @IsString()
  de: string;
}

export abstract class ArticleBlockDto {
  @ApiProperty()
  @IsString()
  type: string;
}

export class ArticleBlockSimpleTextDto extends ArticleBlockDto {
  @ApiProperty({ enum: ['simpleText'] })
  @IsEnum(['simpleText'])
  type: 'simpleText' = 'simpleText';

  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  text: LocalizedStringDto;
}

export class ArticleBlockArticleSectionDto extends ArticleBlockDto {
  @ApiProperty({ enum: ['articleSection'] })
  @IsEnum(['articleSection'])
  type: 'articleSection' = 'articleSection';

  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  title: LocalizedStringDto;

  @ApiProperty({
    type: 'array',
    items: {
      type: 'object'
    },
  })
  @IsArray()
  children: any[];
}

export class ArticleBlockUnorderListDto extends ArticleBlockDto {
  @ApiProperty({ enum: ['unorderList'] })
  @IsEnum(['unorderList'])
  type: 'unorderList' = 'unorderList';

  @ApiProperty({ type: [LocalizedStringDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocalizedStringDto)
  items: LocalizedStringDto[];
}

export class UnorderListWithTitlesItemDto {
  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  title: LocalizedStringDto;

  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  text: LocalizedStringDto;
}

export class ArticleBlockUnorderListWithTitlesDto extends ArticleBlockDto {
  @ApiProperty({ enum: ['unorderListWithTitles'] })
  @IsEnum(['unorderListWithTitles'])
  type: 'unorderListWithTitles' = 'unorderListWithTitles';

  @ApiProperty({ type: [UnorderListWithTitlesItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UnorderListWithTitlesItemDto)
  items: UnorderListWithTitlesItemDto[];
}

export class OrderListItemDto {
  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  title: LocalizedStringDto;

  @ApiProperty({
    type: 'array',
    items: { type: 'object' },
  })
  @IsArray()
  children: any[];
}

export class ArticleBlockOrderListDto extends ArticleBlockDto {
  @ApiProperty({ enum: ['orderList'] })
  @IsEnum(['orderList'])
  type: 'orderList' = 'orderList';

  @ApiProperty({ type: [OrderListItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderListItemDto)
  items: OrderListItemDto[];
}

export class ArticleBlockArticleInfoBlockDto extends ArticleBlockDto {
  @ApiProperty({ enum: ['articleInfoBlock'] })
  @IsEnum(['articleInfoBlock'])
  type: 'articleInfoBlock' = 'articleInfoBlock';

  @ApiProperty({ type: () => LocalizedStringDto, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  title?: LocalizedStringDto;

  @ApiProperty({ type: () => LocalizedStringDto, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  text?: LocalizedStringDto;

  @ApiProperty({
    type: 'array',
    items: { type: 'object' },
    required: false
  })
  @IsOptional()
  @IsArray()
  children?: any[];
}

export class ArticleBlockKeyFindingsBlockDto extends ArticleBlockDto {
  @ApiProperty({ enum: ['keyFindingsBlock'] })
  @IsEnum(['keyFindingsBlock'])
  type: 'keyFindingsBlock' = 'keyFindingsBlock';

  @ApiProperty({ type: [LocalizedStringDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocalizedStringDto)
  items: LocalizedStringDto[];
}

@ApiExtraModels(
  ArticleBlockSimpleTextDto,
  ArticleBlockArticleSectionDto,
  ArticleBlockUnorderListDto,
  ArticleBlockUnorderListWithTitlesDto,
  ArticleBlockOrderListDto,
  ArticleBlockArticleInfoBlockDto,
  ArticleBlockKeyFindingsBlockDto,
)
export class CreateArticleDto {
  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  title: LocalizedStringDto;

  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  subtitle: LocalizedStringDto;

  @ApiProperty({ type: () => LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  excerpt: LocalizedStringDto;

  @ApiProperty({ enum: ArticleCategory })
  @IsEnum(ArticleCategory)
  category: ArticleCategory;

  @ApiProperty()
  @IsString()
  readTime: string;

  @ApiProperty()
  @IsString()
  color: string;

  @ApiProperty()
  @IsString()
  slug: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  img?: string;

  @ApiProperty({
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
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ArticleBlockDto, {
    keepDiscriminatorProperty: true,
    discriminator: {
      property: 'type',
      subTypes: [
        { value: ArticleBlockSimpleTextDto, name: 'simpleText' },
        { value: ArticleBlockArticleSectionDto, name: 'articleSection' },
        { value: ArticleBlockUnorderListDto, name: 'unorderList' },
        { value: ArticleBlockUnorderListWithTitlesDto, name: 'unorderListWithTitles' },
        { value: ArticleBlockOrderListDto, name: 'orderList' },
        { value: ArticleBlockArticleInfoBlockDto, name: 'articleInfoBlock' },
        { value: ArticleBlockKeyFindingsBlockDto, name: 'keyFindingsBlock' },
      ],
    },
  })
  content: ArticleBlockDto[];

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  order?: number;
}

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}

export class ReorderArticlesDto {
  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  ids: string[];
}
