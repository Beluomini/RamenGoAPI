import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  image?: string;

  @ApiProperty()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  brothId: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  proteinId: string;
}
