import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Headers,
  Delete,
  Put,
} from '@nestjs/common';
import { ProteinsService } from './proteins.service';
import { CreateProteinDto } from './dto/create-protein.dto';
import { UpdateProteinDto } from './dto/update-protein.dto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('proteins')
@ApiHeader({
  name: 'x-api-key',
})
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
  findAll(@Headers('x-api-key') apiKey: string) {
    return this.proteinsService.findAll(apiKey);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The Protein' })
  @ApiResponse({ status: 404, description: 'Protein with id ${id} not found' })
  findOne(@Param('id') id: string) {
    return this.proteinsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'The Protein has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Protein with id ${id} not found' })
  update(@Param('id') id: string, @Body() updateProteinDto: UpdateProteinDto) {
    return this.proteinsService.update(id, updateProteinDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The Protein has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Protein with id ${id} not found' })
  remove(@Param('id') id: string) {
    return this.proteinsService.remove(id);
  }
}
