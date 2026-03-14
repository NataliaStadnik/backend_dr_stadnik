import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsArray,
  IsDateString,
  ValidateNested,
  IsObject,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class LocalizedStringDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  en: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ru: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  de: string;
}

export class CreateSeminarDto {
  @ApiProperty({ type: LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  title: LocalizedStringDto;

  @ApiProperty({ example: '2026-03-28T10:00:00.000Z' })
  @IsDateString()
  date: string;

  @ApiProperty({ type: LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  location: LocalizedStringDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  link: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  logoLink: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  logoTitle: string;

  @ApiProperty({ type: LocalizedStringDto })
  @ValidateNested()
  @Type(() => LocalizedStringDto)
  @IsObject()
  description: LocalizedStringDto;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ApiProperty({ required: false })
  @IsNumber()
  order?: number;
}

export class UpdateSeminarDto extends PartialType(CreateSeminarDto) {}

export class ReorderSeminarsDto {
  @ApiProperty({ type: [Number] })
  @IsArray()
  @IsNumber({}, { each: true })
  ids: number[];
}
