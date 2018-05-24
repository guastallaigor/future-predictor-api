import { Module } from '@nestjs/common';

import { FutureModule } from './futures/future.module';
@Module({
    modules: [FutureModule],
})

export class ApplicationModule { }
