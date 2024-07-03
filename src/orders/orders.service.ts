import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/PrismaService';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const broth = await this.prisma.broth.findUnique({
      where: { id: createOrderDto.brothId },
    });
    const protein = await this.prisma.protein.findUnique({
      where: { id: createOrderDto.proteinId },
    });
    if (!broth || !protein) {
      throw new BadRequestException(`Both brothId and proteinId are required`);
    }
    const order = this.prisma.order.create({
      data: createOrderDto,
      // data: {
      //   brothId: createOrderDto.brothId,
      //   proteinId: createOrderDto.proteinId,
      //   description: createOrderDto.description,
      //   image: createOrderDto.image,
      // },
    });
    return order;
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: string) {
    const order = this.prisma.order.findFirst({ where: { id } });
    if (!order) {
      throw new BadRequestException(`Order with id ${id} not found`);
    }
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.prisma.order.findFirst({ where: { id } });
    if (!order) {
      throw new BadRequestException(`Order with id ${id} not found`);
    }
    const broth = await this.prisma.broth.findUnique({
      where: { id: updateOrderDto.brothId },
    });
    const protein = await this.prisma.protein.findUnique({
      where: { id: updateOrderDto.proteinId },
    });
    if (!broth || !protein) {
      throw new BadRequestException(`Both brothId and proteinId are required`);
    }
    return this.prisma.order.update({
      where: { id },
      data: {
        brothId: updateOrderDto.brothId,
        proteinId: updateOrderDto.proteinId,
        description: broth.name + ' and ' + protein.name + ' ramen',
      },
    });
  }

  remove(id: string) {
    const order = this.prisma.order.findFirst({ where: { id } });
    if (!order) {
      throw new BadRequestException(`Order with id ${id} not found`);
    }
    return this.prisma.order.delete({ where: { id } });
  }
}
