import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import * as slug from 'slug';

import { CreateFutureDto } from './create-future.dto';
import { FutureService } from './future.service';
import { Future } from './future.interface';

@Controller('future')
export class FutureController {

  constructor(
    private readonly futureService: FutureService,
  ) { }

  @Get()
  findAll(): Promise<Future[]> {
    return this.futureService.findAll();
  }

  @Post()
  async create(@Body() createFutureDto: CreateFutureDto) {
    const newFuture = Object.assign({}, createFutureDto, {
      id: slug(createFutureDto.description, { lower: true }),
    });
    await this.futureService.create(newFuture);
  }

  @Delete(':futureId')
  delete(@Param('futureId') futureId) {
    return this.futureService.deleteOne(futureId);
  }

  @Get(':futureId')
  findOne(@Param('futureId') futureId): Promise<Future[]> {
    return this.futureService.findOne(futureId);
  }
}
