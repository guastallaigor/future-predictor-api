import { Connection } from 'typeorm';

import { Future } from './future.entity';

export const futureProviders = [{
    provide: 'FutureRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Future),
    inject: ['DbConnectionToken'],
}];
