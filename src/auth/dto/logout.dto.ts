import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LogoutDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1N...',
    description: 'refresh token',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  refreshToken!: string;
}
