import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { ONE_MINUTE_MS } from '../common/constants';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { AuthResponseEntity } from './entities/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Throttle({ default: { ttl: ONE_MINUTE_MS, limit: 10 } })
  @Post('register')
  @ApiOperation({ summary: 'Registering a new user' })
  register(@Body() dto: LoginDto) {
    // Используем LoginDto, так как там те же поля: email и password
    return this.auth.register(dto.email, dto.password);
  }

  @Throttle({ default: { ttl: ONE_MINUTE_MS, limit: 10 } })
  @Post('login')
  @HttpCode(HttpStatus.OK) // Явно указываем 200 вместо стандартного 201 для POST
  @ApiOperation({
    summary: 'Login',
    description: 'Check email and password and take accessToken + refreshToken',
  })
  @ApiOkResponse({
    description: 'Successfully logged in',
    schema: {
      example: {
        accessToken: 'eyJhbGci...',
        refreshToken: '456-abc-...',
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Invalid email or password' })
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto.email, dto.password);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Logout',
    description: 'Invalidates the refresh token in the database',
  })
  @ApiOkResponse({ description: 'Successfully logged out' })
  logout(@Body() dto: LogoutDto) {
    return this.auth.logout(dto.refreshToken);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh authentication tokens' })
  @ApiOkResponse({
    description: 'Tokens refreshed successfully.',
    type: AuthResponseEntity,
  })
  @ApiUnauthorizedResponse({
    description: 'Refresh token is invalid, expired, or already revoked.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid request body.',
  })
  refresh(@Body() dto: RefreshTokenDto) {
    return this.auth.refresh(dto.refreshToken);
  }
}
