import { Broth } from 'src/broths/entities/broth.entity';
import { Protein } from 'src/proteins/entities/protein.entity';

export class Order {
  id?: string;
  image?: string;
  description?: string;
  brothId: Broth;
  proteinId: Protein;
}
