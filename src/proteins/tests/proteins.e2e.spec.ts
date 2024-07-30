import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ProteinsModule } from '../proteins.module';
import { PrismaService } from '../../PrismaService';

describe('Proteins', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ProteinsModule],
      providers: [
        {
          provide: PrismaService,
          useValue: {
            protein: {
              findMany: jest.fn().mockResolvedValue([]),
            },
          },
        },
      ],
    }).compile();

    prisma = module.get<PrismaService>(PrismaService);

    app = module.createNestApplication();
    await app.init();
  });

  it('/GET proteins', async () => {
    return request(app.getHttpServer())
      .get('/proteins')
      .expect(200)
      .expect(JSON.stringify(await prisma.protein.findMany()));
  });

  afterAll(async () => {
    await app.close();
  });
});
