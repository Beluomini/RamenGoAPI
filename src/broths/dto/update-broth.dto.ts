import { PartialType } from '@nestjs/mapped-types';
import { CreateBrothDto } from './create-broth.dto';

export class UpdateBrothDto extends PartialType(CreateBrothDto) {}
