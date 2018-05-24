import { Test } from '@nestjs/testing';

import { PostsController } from './future.controller';
import { FutureService } from './future.service';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: FutureService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PostsController],
      components: [FutureService],
    }).compile();

    postsService = module.get<FutureService>(FutureService);
    postsController = module.get<PostsController>(PostsController);
  });

  describe('findAll', () => {
    it('should return an array of valid posts', async () => {
      const result = [{ title: 'This is a test post' }];
      jest.spyOn(postsService, 'findAll').mockImplementation(() => result);
      expect(await postsController.findAll()).toBe(result);
    });
  });
});
