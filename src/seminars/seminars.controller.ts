import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { ONE_MINUTE_MS } from '../common/constants';
import { SeminarsService } from './seminars.service';
import {
  CreateSeminarDto,
  ReorderSeminarsDto,
  UpdateSeminarDto,
} from './dto/seminar.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SeminarEntity } from './entities/seminar.entity';

@ApiTags('Seminars')
@Controller('seminars')
export class SeminarsController {
  constructor(private readonly seminarsService: SeminarsService) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(ONE_MINUTE_MS)
  @Get()
  @ApiOperation({ summary: 'Get list of seminars' })
  @ApiOkResponse({ description: 'The list of seminars has been successfully retrieved.', type: [SeminarEntity] })
  findAll() {
    return this.seminarsService.findAll();
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Get a single seminar by ID' })
  @ApiOkResponse({ description: 'The seminar has been successfully retrieved.', type: SeminarEntity })
  @ApiNotFoundResponse({ description: 'Seminar not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.seminarsService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a seminar' })
  @ApiCreatedResponse({ description: 'The seminar has been successfully created.', type: SeminarEntity })
  create(@Body() createSeminarDto: CreateSeminarDto) {
    return this.seminarsService.create(createSeminarDto);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Put('reorder')
  @ApiOperation({ summary: 'Change order of seminars' })
  @ApiOkResponse({ description: 'Order updated successfully' })
  reorder(@Body() reorderDto: ReorderSeminarsDto) {
    return this.seminarsService.reorder(reorderDto.ids);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Update a seminar' })
  @ApiOkResponse({ description: 'The seminar has been successfully updated.', type: SeminarEntity })
  @ApiNotFoundResponse({ description: 'Seminar not found' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSeminarDto: UpdateSeminarDto,
  ) {
    return this.seminarsService.update(id, updateSeminarDto);
  }

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Refused to allow access without a valid token' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a seminar' })
  @ApiOkResponse({ description: 'The seminar has been successfully deleted.', type: SeminarEntity })
  @ApiNotFoundResponse({ description: 'Seminar not found' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.seminarsService.remove(id);
  }
}
