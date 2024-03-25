import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepositoryTag } from './app.repository';
import { AppRepositoryHashmap } from './app.repository.hashmap';
import { of } from 'rxjs';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: AppRepositoryTag, useClass: AppRepositoryHashmap },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('shorten', () => {
    it('should return a valid hash for a valid URL', (done) => {
      const url = 'https://pokemon.com';
      const hash = 'abc123';
      jest.spyOn(appService, 'shorten').mockReturnValue(of(hash));

      appController.shorten(url).subscribe({
        next: (response) => {
          expect(response).toEqual({ hash });
        },
        complete: done,
      });
    });

    it('should return an error for an empty URL', (done) => {
      const url = '';
      const expectedError = {
        error:
          "No url provided. Please provide in the body. E.g. {'url':'https://google.com'}",
        code: 400,
      };

      appController.shorten(url).subscribe({
        next: (response) => {
          expect(response).toEqual(expectedError);
        },
        complete: done,
      });
    });
  });

  describe('retrieveAndRedirect', () => {
    it('should redirect to the correct URL for a valid hash', (done) => {
      const hash = 'abc123';
      const url = 'https://pokemon.com';
      jest.spyOn(appService, 'retrieve').mockReturnValue(of(url));

      appController.retrieveAndRedirect(hash).subscribe({
        next: (response) => {
          expect(response).toEqual({ url });
        },
        complete: done,
      });
    });

    it('should return an error object for an invalid hash', (done) => {
      const hash = 'invalidHash';
      const expectedError = {
        url: undefined,
      };
      jest.spyOn(appService, 'retrieve').mockReturnValue(of(undefined));

      appController.retrieveAndRedirect(hash).subscribe({
        next: (response) => {
          expect(response).toEqual(expectedError);
        },
        complete: done,
      });
    });
  });
});
