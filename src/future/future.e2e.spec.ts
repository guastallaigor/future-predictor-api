import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FutureModule } from './future.module';
import { FutureService } from './future.service';

describe('Future', () => {
  let app: INestApplication;
  const futureService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [FutureModule],
    })
      .overrideProvider(FutureService)
      .useValue(futureService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET future`, () => {
    return request(app.getHttpServer())
      .get('/future')
      .expect(200)
      .expect({
        data: futureService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
