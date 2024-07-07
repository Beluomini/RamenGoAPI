import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
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
        brothId: '71ff624a-dc56-4960-a3e7-98ef8b382ec5',
        proteinId: 'aed3be32-5a3c-4610-961d-aa95c7ac70fd',
        image:
          'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFtZW58ZW58MHx8MHx8fDA%3D',
        description: 'Order test',
      };

      prisma.order.create = jest.fn().mockResolvedValue(result);

      expect(
        await ordersService.create({
          brothId: '71ff624a-dc56-4960-a3e7-98ef8b382ec5',
          proteinId: 'aed3be32-5a3c-4610-961d-aa95c7ac70fd',
          image:
            'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFtZW58ZW58MHx8MHx8fDA%3D',
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
        brothId: '71ff624a-dc56-4960-a3e7-98ef8b382ec5',
        proteinId: 'aed3be32-5a3c-4610-961d-aa95c7ac70fd',
        image:
          'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFtZW58ZW58MHx8MHx8fDA%3D',
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
        brothId: '71ff624a-dc56-4960-a3e7-98ef8b382ec5',
        proteinId: 'aed3be32-5a3c-4610-961d-aa95c7ac70fd',
        image:
          'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFtZW58ZW58MHx8MHx8fDA%3D',
        description: 'Order test updated',
      };

      prisma.order.findFirst = jest.fn().mockResolvedValue(result);
      prisma.order.update = jest.fn().mockResolvedValue(result);

      expect(
        await ordersService.update('1', {
          brothId: '71ff624a-dc56-4960-a3e7-98ef8b382ec5',
          proteinId: 'aed3be32-5a3c-4610-961d-aa95c7ac70fd',
          image:
            'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFtZW58ZW58MHx8MHx8fDA%3D',
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
        brothId: '71ff624a-dc56-4960-a3e7-98ef8b382ec5',
        proteinId: 'aed3be32-5a3c-4610-961d-aa95c7ac70fd',
        image:
          'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFtZW58ZW58MHx8MHx8fDA%3D',
        description: 'Order test',
      };

      prisma.order.findFirst = jest.fn().mockResolvedValue(result);
      prisma.order.delete = jest.fn().mockResolvedValue(result);

      expect(await ordersService.remove('1')).toBe(result);
      expect(prisma.order.delete).toHaveBeenCalled();
    });
  });
});
