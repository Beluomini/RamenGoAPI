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
import { BrothsService } from './broths.service';
import { CreateBrothDto } from './dto/create-broth.dto';
import { UpdateBrothDto } from './dto/update-broth.dto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('broths')
@ApiHeader({
  name: 'x-api-key',
})
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
  findAll(@Headers('x-api-key') apiKey: string) {
    return this.brothsService.findAll(apiKey);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'The Broth' })
  @ApiResponse({ status: 404, description: 'Broth with id ${id} not found' })
  findOne(@Param('id') id: string) {
    return this.brothsService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'The Broth has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Broth with id ${id} not found' })
  update(@Param('id') id: string, @Body() updateBrothDto: UpdateBrothDto) {
    return this.brothsService.update(id, updateBrothDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The Broth has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Broth with id ${id} not found' })
  remove(@Param('id') id: string) {
    return this.brothsService.remove(id);
  }
}
