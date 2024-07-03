import { Order } from 'src/orders/entities/order.entity';

export class Broth {
  id?: string;
  name: string;
  imageInactive: string;
  imageActive: string;
  description: string;
  price: number;
  orders?: Order[];
}
