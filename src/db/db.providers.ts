import { createConnection } from 'typeorm';

import { Future } from '../future/future.entity';

export const dbProvider =
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      entities: [
        Future,
      ],
      synchronize: true, // DEV only, do not use on PROD!
    }),
  };
