import { ApiProperty } from '@nestjs/swagger';
import { LocaleString } from '../dto/reviews.dto';

export class ReviewEntity {
  @ApiProperty({ example: '6cb1a683-2709-45e6-94bc-ebed530feb51' })
  id: string;

  @ApiProperty()
  quote: LocaleString;

  @ApiProperty()
  author: LocaleString;

  @ApiProperty({ example: 5 })
  rating: number;

  @ApiProperty({ example: 'otzovik' })
  source: string;

  @ApiProperty({ example: 'https://otzovik.com/' })
  link: string;

  @ApiProperty({ example: 0 })
  order: number;

  @ApiProperty({ example: true })
  isVisible: boolean;

  @ApiProperty({ example: '2026-03-14T21:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2026-03-14T21:00:00.000Z' })
  updatedAt: Date;
}
