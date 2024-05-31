import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProteinsService } from './proteins.service';
import { CreateProteinDto } from './dto/create-protein.dto';
import { UpdateProteinDto } from './dto/update-protein.dto';

@Controller('proteins')
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Post()
  create(@Body() createProteinDto: CreateProteinDto) {
    return this.proteinsService.create(createProteinDto);
  }

  @Get()
  findAll() {
    return this.proteinsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.proteinsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProteinDto: UpdateProteinDto) {
    return this.proteinsService.update(+id, updateProteinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.proteinsService.remove(+id);
  }
}
