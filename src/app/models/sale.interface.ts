import { ProductUrl } from '../services/produdc.service';
import { Product } from './product.interface';

export interface Sale {
  id: number;
  clientName: string;
  date: Date;
  productsSold: ProductUrl[];
  total: number;
}

