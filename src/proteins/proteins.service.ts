import { Injectable } from '@nestjs/common';
import { CreateProteinDto } from './dto/create-protein.dto';
import { UpdateProteinDto } from './dto/update-protein.dto';

@Injectable()
export class ProteinsService {
  create(createProteinDto: CreateProteinDto) {
    return 'This action adds a new protein';
  }

  findAll() {
    return `This action returns all proteins`;
  }

  findOne(id: number) {
    return `This action returns a #${id} protein`;
  }

  update(id: number, updateProteinDto: UpdateProteinDto) {
    return `This action updates a #${id} protein`;
  }

  remove(id: number) {
    return `This action removes a #${id} protein`;
  }
}
