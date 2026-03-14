import { ApiProperty } from '@nestjs/swagger';
import { Seminar } from '../../generated/client';
import { LocalizedStringDto } from '../dto/seminar.dto';

export class SeminarEntity implements Seminar {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: LocalizedStringDto })
  title: any;

  @ApiProperty()
  date: Date;

  @ApiProperty({ type: LocalizedStringDto })
  location: any;

  @ApiProperty()
  link: string;

  @ApiProperty()
  logoLink: string;

  @ApiProperty()
  logoTitle: string;

  @ApiProperty({ type: LocalizedStringDto })
  description: any;

  @ApiProperty({ type: [String] })
  images: string[];

  @ApiProperty()
  order: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
