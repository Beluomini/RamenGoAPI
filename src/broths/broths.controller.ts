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
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('broths')
@Controller('broths')
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The Broth has been successfully created.',
  })
  create(@Body() createBrothDto: CreateBrothDto) {
    return this.brothsService.create(createBrothDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of Broths' })
  findAll() {
    return this.brothsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The Broth' })
  @ApiResponse({ status: 404, description: 'Broth with id ${id} not found' })
  findOne(@Param('id') id: number) {
    return this.brothsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The Broth has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Broth with id ${id} not found' })
  update(@Param('id') id: number, @Body() updateBrothDto: UpdateBrothDto) {
    return this.brothsService.update(id, updateBrothDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The Broth has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Broth with id ${id} not found' })
  remove(@Param('id') id: number) {
    return this.brothsService.remove(id);
  }
}
