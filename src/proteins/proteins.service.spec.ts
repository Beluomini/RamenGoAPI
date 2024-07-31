import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { ProteinsService } from './proteins.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ProteinsService', () => {
  let proteinsService: ProteinsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProteinsService, PrismaService],
    }).compile();

    proteinsService = module.get<ProteinsService>(ProteinsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(proteinsService).toBeDefined();
  });

  describe('create', () => {
    it('should create a protein', async () => {
      const result = {
        name: 'ProteinTest',
        imageInactive: 'Image Test Inactive',
        imageActive: 'Image Test Active',
        description: 'Esta é uma proteína criada para teste.',
        price: 10.9,
      };

      prisma.protein.create = jest.fn().mockResolvedValue(result);

      expect(
        await proteinsService.create({
          name: 'ProteinTest',
          imageInactive: 'Image Test Inactive',
          imageActive: 'Image Test Active',
          description: 'Esta é uma proteína criada para teste.',
          price: 10.9,
        }),
      ).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of proteins', async () => {
      const result = [];

      prisma.protein.findMany = jest.fn().mockResolvedValue(result);

      jest.spyOn(prisma.protein, 'findMany').mockResolvedValue(result);

      expect(await proteinsService.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a protein', async () => {
      const result = {
        name: 'ProteinTest',
        imageInactive: 'Image Test Inactive',
        imageActive: 'Image Test Active',
        description: 'Esta é uma proteína criada para teste.',
        price: 10.9,
      };

      prisma.protein.findFirst = jest.fn().mockResolvedValue(result);

      expect(await proteinsService.findOne('1')).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a protein', async () => {
      const result = {
        description: 'Esta é uma proteína criada para teste e alterada.',
      };

      prisma.protein.findFirst = jest.fn().mockResolvedValue(result);
      prisma.protein.update = jest.fn().mockResolvedValue(result);

      expect(
        await proteinsService.update('1', {
          name: 'ProteinTest',
          imageInactive: 'Image Test Inactive',
          imageActive: 'Image Test Active',
          description: 'Esta é uma proteína criada para teste e alterada.',
          price: 10.9,
        }),
      ).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a protein', async () => {
      const result = {
        name: 'ProteinTest',
        imageInactive: 'Image Test Inactive',
        imageActive: 'Image Test Active',
        description: 'Esta é uma proteína criada para teste.',
        price: 10.9,
      };

      prisma.protein.findFirst = jest.fn().mockResolvedValue(result);
      prisma.protein.delete = jest.fn().mockResolvedValue(result);

      expect(await proteinsService.remove('1')).toBe(result);
    });

    it('should throw an error if protein not found', () => {
      prisma.protein.findFirst = jest.fn().mockResolvedValue(null);
      expect(proteinsService.remove('99')).rejects.toThrow(NotFoundException);
    });
  });
});
