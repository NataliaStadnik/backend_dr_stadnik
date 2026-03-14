import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsInt,
  Min,
  Max,
  IsObject,
  IsUrl,
  IsArray,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class LocaleString {
  // Добавляем эту строку, чтобы TS разрешил использовать класс как JsonObject
  [key: string]: string;

  @ApiProperty({ example: 'Текст на русском' })
  @IsString()
  ru: string;

  @ApiProperty({ example: 'Text in English' })
  @IsString()
  en: string;

  @ApiProperty({ example: 'Text auf Deutsch' })
  @IsString()
  de: string;
}

export class CreateReviewDto {
  @ApiProperty({ type: LocaleString })
  @IsObject()
  @IsNotEmpty()
  quote: LocaleString;

  @ApiProperty({ type: LocaleString })
  @IsObject()
  @IsNotEmpty()
  author: LocaleString;

  @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({ example: 'otzovik' })
  @IsString()
  source: string;

  @ApiProperty({ example: 'https://otzovik.com/' })
  @IsUrl()
  link: string;

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isVisible?: boolean;
}

export class ReorderReviewsDto {
  @ApiProperty({
    example: ['6cb1a683...', 'ebed530f...'],
    description: 'Array of id in new order',
  })
  @IsArray()
  @IsString({ each: true })
  ids: string[];
}
