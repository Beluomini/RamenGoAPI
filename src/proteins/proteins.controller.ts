import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProteinsService } from './proteins.service';
import { CreateProteinDto } from './dto/create-protein.dto';
import { UpdateProteinDto } from './dto/update-protein.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('proteins')
@Controller('proteins')
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The Protein has been successfully created.',
  })
  create(@Body() createProteinDto: CreateProteinDto) {
    return this.proteinsService.create(createProteinDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of Proteins' })
  findAll() {
    return this.proteinsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The Protein' })
  @ApiResponse({ status: 404, description: 'Protein with id ${id} not found' })
  findOne(@Param('id') id: number) {
    return this.proteinsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'The Protein has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Protein with id ${id} not found' })
  update(@Param('id') id: number, @Body() updateProteinDto: UpdateProteinDto) {
    return this.proteinsService.update(+id, updateProteinDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The Protein has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Protein with id ${id} not found' })
  remove(@Param('id') id: number) {
    return this.proteinsService.remove(+id);
  }
}
