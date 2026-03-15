import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'Refresh token',
    example: 'eyJhbGciOiJIUzI1NiIs9...',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  refreshToken: string;
}
