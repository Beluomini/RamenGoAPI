import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrothsService } from './broths.service';
import { CreateBrothDto } from './dto/create-broth.dto';
import { UpdateBrothDto } from './dto/update-broth.dto';

@Controller('broths')
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Post()
  create(@Body() createBrothDto: CreateBrothDto) {
    return this.brothsService.create(createBrothDto);
  }

  @Get()
  findAll() {
    return this.brothsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brothsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrothDto: UpdateBrothDto) {
    return this.brothsService.update(+id, updateBrothDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brothsService.remove(+id);
  }
}
