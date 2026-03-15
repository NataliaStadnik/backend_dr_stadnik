import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseEntity {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1Ni...',
    description: 'The new Access Token (JWT)',
  })
  accessToken: string;

  @ApiProperty({
    example: '8f7d6e5c4b3a2f1e...',
    description: 'The new Refresh Token (opaque string)',
  })
  refreshToken: string;
}
