import type { Product } from 'src/interfaces';

export type ProductCardProps = Omit<Product, 'id'>;
