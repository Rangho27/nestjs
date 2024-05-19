import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();
  });

  describe('index', () => {
    it('should return "Index Page"', () => {
      const appController = app.get(AppController);
      expect(appController.root()).toBe('Index Page');
    });
  });
});
