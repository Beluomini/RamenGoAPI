import { Injectable } from '@nestjs/common';
import { CreateBrothDto } from './dto/create-broth.dto';
import { UpdateBrothDto } from './dto/update-broth.dto';
import { PrismaService } from 'src/PrismaService';

@Injectable()
export class BrothsService {
  constructor(private prisma: PrismaService) {}

  create(createBrothDto: CreateBrothDto) {
    return 'This action adds a new broth';
  }

  findAll() {
    return `This action returns all broths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} broth`;
  }

  update(id: number, updateBrothDto: UpdateBrothDto) {
    return `This action updates a #${id} broth`;
  }

  remove(id: number) {
    return `This action removes a #${id} broth`;
  }
}
