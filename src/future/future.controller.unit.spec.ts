import { FutureController } from './future.controller';
import { FutureService } from './future.service';

describe('FutureController', () => {
  let futureController: FutureController;
  let futureService: FutureService;

  beforeEach(() => {
    futureService = new FutureService();
    futureController = new FutureController(futureService);
  });

  describe('findAll', () => {
    it('should return an array of future', async () => {
      const result = ['test'];
      jest.spyOn(futureService, 'findAll').mockImplementation(() => result);

      expect(await futureController.findAll()).toBe(result);
    });
  });
});
