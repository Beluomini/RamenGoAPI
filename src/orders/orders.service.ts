import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/PrismaService';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async create(createOrderDto: CreateOrderDto, apiKey: string) {
    if (apiKey !== process.env.API_KEY) {
      throw new BadRequestException('x-api-key header missing');
    }
    const broth = await this.prisma.broth.findUnique({
      where: { id: createOrderDto.brothId },
    });
    const protein = await this.prisma.protein.findUnique({
      where: { id: createOrderDto.proteinId },
    });
    if (!broth || !protein) {
      throw new BadRequestException(`Both brothId and proteinId are required`);
    }
    const image =
      'https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFtZW58ZW58MHx8MHx8fDA%3D';
    const exterApiUrl =
      'https://api.tech.redventures.com.br/orders/generate-id';
    const configHeaders = {
      headers: {
        'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf',
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.post(exterApiUrl, {}, configHeaders),
    );
    const rawOrder = {
      id: data.orderId,
      brothId: createOrderDto.brothId,
      proteinId: createOrderDto.proteinId,
      image: image,
      description: broth.name + ' and ' + protein.name + ' ramen',
    };
    const order = await this.prisma.order.create({ data: rawOrder });
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
