import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../orders/orders.service';
import { PrismaService } from '../PrismaService';

describe('OrdersController', () => {
  let ordersService: OrdersService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService, PrismaService],
    }).compile();

    ordersService = module.get<OrdersService>(OrdersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(ordersService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      const result = [];

      prisma.order.findMany = jest.fn().mockResolvedValue(result);

      expect(await ordersService.findAll()).toBe(result);
      expect(prisma.order.findMany).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should create an order', async () => {
      const result = {
        brothId: 'brothIdTest',
        proteinId: 'proteinIdTest',
        image: 'OrderImageTest',
        description: 'Order test',
      };

      const brothTest = {
        id: 'brothIdTest',
      };
      prisma.broth.findUnique = jest.fn().mockResolvedValue(brothTest);
      const proteinTest = {
        id: 'proteinIdTest',
      };
      prisma.protein.findUnique = jest.fn().mockResolvedValue(proteinTest);

      prisma.order.create = jest.fn().mockResolvedValue(result);

      expect(
        await ordersService.create({
          brothId: 'brothIdTest',
          proteinId: 'proteinIdTest',
          image: 'OrderImageTest',
          description: 'Order test',
        }),
      ).toBe(result);
      expect(prisma.order.create).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return an order', async () => {
      const result = {
        id: '1',
        brothId: 'brothIdTest',
        proteinId: 'proteinIdTest',
        image: 'OrderImageTest',
        description: 'Order test',
      };

      prisma.order.findFirst = jest.fn().mockResolvedValue(result);

      expect(await ordersService.findOne('1')).toBe(result);
      expect(prisma.order.findFirst).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update an order', async () => {
      const result = {
        id: '1',
        brothId: 'brothIdTest',
        proteinId: 'proteinIdTest',
        image: 'OrderImageTest',
        description: 'Order test updated',
      };

      const brothTest = {
        id: 'brothIdTest',
      };
      prisma.broth.findUnique = jest.fn().mockResolvedValue(brothTest);
      const proteinTest = {
        id: 'proteinIdTest',
      };
      prisma.protein.findUnique = jest.fn().mockResolvedValue(proteinTest);

      prisma.order.findFirst = jest.fn().mockResolvedValue(result);
      prisma.order.update = jest.fn().mockResolvedValue(result);

      expect(
        await ordersService.update('1', {
          brothId: 'brothIdTest',
          proteinId: 'proteinIdTest',
          image: 'OrderImageTest',
          description: 'Order test updated',
        }),
      ).toBe(result);
      expect(prisma.order.update).toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('should remove an order', async () => {
      const result = {
        id: '1',
        brothId: 'brothIdTest',
        proteinId: 'proteinIdTest',
        image: 'OrderImageTest',
        description: 'Order test',
      };

      prisma.order.findFirst = jest.fn().mockResolvedValue(result);
      prisma.order.delete = jest.fn().mockResolvedValue(result);

      expect(await ordersService.remove('1')).toBe(result);
      expect(prisma.order.delete).toHaveBeenCalled();
    });
  });
});
