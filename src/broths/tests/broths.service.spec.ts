import { PrismaService } from '../../PrismaService';
import { BrothsService } from '../broths.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('BrothsService', () => {
  let brothsService: BrothsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrothsService, PrismaService],
    }).compile();

    brothsService = module.get<BrothsService>(BrothsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('findAll', () => {
    it('should return an array of broths', async () => {
      const result = [];

      prisma.broth.findMany = jest.fn().mockResolvedValue(result);

      expect(await brothsService.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a broth', async () => {
      const result = {
        name: 'BrothTest',
        imageInactive:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
        imageActive:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
        description: 'Este é um Broth criado para teste.',
        price: 5.5,
      };

      prisma.broth.create = jest.fn().mockResolvedValue(result);

      expect(
        await brothsService.create({
          name: 'BrothTest',
          imageInactive:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
          imageActive:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
          description: 'Este é um Broth criado para teste.',
          price: 5.5,
        }),
      ).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a broth', async () => {
      const result = {
        name: 'BrothTest',
        imageInactive:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
        imageActive:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
        description: 'Este é um Broth criado para teste.',
        price: 5.5,
      };

      prisma.broth.findFirst = jest.fn().mockResolvedValue(result);

      expect(await brothsService.findOne('1')).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a broth', async () => {
      const result = {
        name: 'BrothTest',
        imageInactive:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
        imageActive:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-psd%2Fpsd-shoyu-ramen-png-transparent-background_133986597.htm&psig=AOvVaw0djTADyB9jY_wpYRTbwdb2&ust=1717261579785000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCn6YqwuIYDFQAAAAAdAAAAABAE',
        description: 'Este é um Broth criado para teste e atualizado.',
      };

      prisma.broth.findFirst = jest.fn().mockResolvedValue(result);
      prisma.broth.update = jest.fn().mockResolvedValue(result);

      expect(
        await brothsService.update('1', {
          description: 'Este é um Broth criado para teste e atualizado.',
        }),
      ).toBe(result);

      expect(await brothsService.update('1', {})).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a broth', async () => {
      const result = [];

      prisma.broth.findFirst = jest.fn().mockResolvedValue(result);
      prisma.broth.delete = jest.fn().mockResolvedValue(result);

      expect(await brothsService.remove('1')).toBe(result);
    });
  });
});
