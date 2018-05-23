import { Module } from '@nestjs/common';

import { Future } from './future/future.module';
@Module({
    modules: [
      Future,
    ],
})

export class ApplicationModule {}
