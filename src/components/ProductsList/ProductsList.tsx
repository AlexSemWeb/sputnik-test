import styles from './ProductsList.module.css';

import { ProductCard } from '../ProductCard';

import type { FC } from 'react';
import type { ProductsListProps } from './types';

/**
 * Список продуктов
 */
export const ProductsList: FC<ProductsListProps> = props => {
  const { products } = props;

  return (
    <div className={styles['products-list--container']}>
      {products.map(({ id, ...props }) => (
        <ProductCard key={id} {...props} />
      ))}
    </div>
  );
};
