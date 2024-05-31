import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrothDto } from './dto/create-broth.dto';
import { UpdateBrothDto } from './dto/update-broth.dto';
import { PrismaService } from 'src/PrismaService';

@Injectable()
export class BrothsService {
  constructor(private prisma: PrismaService) {}

  create(createBrothDto: CreateBrothDto) {
    const broth = this.prisma.broth.create({
      data: createBrothDto,
    });
    return broth;
  }

  findAll() {
    return this.prisma.broth.findMany();
  }

  findOne(id: number) {
    const broth = this.prisma.broth.findFirst({
      where: {
        id: id,
      },
    });
    if (!broth) {
      throw new NotFoundException(`Broth with id ${id} not found`);
    }
    return broth;
  }

  update(id: number, updateBrothDto: UpdateBrothDto) {
    const broth = this.prisma.broth.findFirst({
      where: {
        id: id,
      },
    });
    if (!broth) {
      throw new NotFoundException(`Broth with id ${id} not found`);
    }
    const newbroth = this.prisma.broth.update({
      where: { id: id },
      data: updateBrothDto,
    });
    return newbroth;
  }

  remove(id: number) {
    const broth = this.prisma.broth.findFirst({
      where: {
        id: id,
      },
    });
    if (!broth) {
      throw new NotFoundException(`Broth with id ${id} not found`);
    }
    return this.prisma.broth.delete({
      where: { id: id },
    });
  }
}
