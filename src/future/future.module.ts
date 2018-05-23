import { Module } from '@nestjs/common';

import { DBModule } from '../db/db.module';
import { FutureController } from './future.controller';
import { FutureService } from './future.service';
import { futureProviders } from './future.providers';

@Module({
    modules: [DBModule],
    controllers: [FutureController],
    components: [
        ...futureProviders,
        FutureService,
    ],
})

export class FutureModule {}
