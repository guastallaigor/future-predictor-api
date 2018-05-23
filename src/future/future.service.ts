import { Component, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Future } from './future.interface';

@Component()
export class FutureService {
  constructor( @Inject('FutureRepositoryToken') private readonly futureRepository: Repository<Future>) { }

  async findAll(): Promise<Future[]> {
    try {
      return await this.futureRepository.find();
    } catch (err) {
      return err;
    }
  }

  async create(entry: Future) {
    try {
      return await this.futureRepository.save(entry);
    } catch (err) {
      return err;
    }
  }

  async deleteOne(futureId: string) {
    try {
      return await this.futureRepository.removeById(futureId);
    } catch (err) {
      return err;
    }
  }
}
