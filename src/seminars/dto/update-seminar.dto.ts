import { PartialType } from '@nestjs/swagger';
import { CreateSeminarDto } from './seminar.dto';

export class UpdateSeminarDto extends PartialType(CreateSeminarDto) {}
