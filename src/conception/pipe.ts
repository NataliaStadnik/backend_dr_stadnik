import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

// Пайпы работают с запросами перед их обработкой в контроллере.
@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('validation failed');
    }
    return val;
  }
}
