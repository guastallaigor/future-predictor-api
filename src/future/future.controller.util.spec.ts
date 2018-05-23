import { Test } from '@nestjs/testing';
import { FutureController } from './future.controller';
import { FutureService } from './future.service';

describe('FutureController', () => {
  let futureController: FutureController;
  let futureService: FutureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
        controllers: [FutureController],
        providers: [FutureService],
      }).compile();

    futureService = module.get<FutureService>(FutureService);
    futureController = module.get<FutureController>(FutureController);
  });

  describe('findAll', () => {
    it('should return an array of future', async () => {
      const result = ['test'];
      jest.spyOn(futureService, 'findAll').mockImplementation(() => result);

      expect(await futureController.findAll()).toBe(result);
    });
  });
});
