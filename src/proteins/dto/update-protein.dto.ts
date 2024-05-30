import { PartialType } from '@nestjs/mapped-types';
import { CreateProteinDto } from './create-protein.dto';

export class UpdateProteinDto extends PartialType(CreateProteinDto) {}
