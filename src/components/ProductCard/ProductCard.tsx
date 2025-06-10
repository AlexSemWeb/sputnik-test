import styles from './ProductCard.module.css';
import { formatPrice } from './utils';

import type { FC } from 'react';
import type { ProductCardProps } from './types';

/**
 * Картчока продукта
 */
export const ProductCard: FC<ProductCardProps> = props => {
  const { imageUrl, title, origin, price, currency } = props;

  return (
    <div className={styles['product-card--container']}>
      <div className={styles['product-card--img']}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles['product-card--description']}>
        <h3>{title}</h3>
        <p>
          Страна происхождения: <b>{origin}</b>
        </p>
        <p>
          Цена в копейках: <b>{formatPrice(price, currency)}</b>
        </p>
      </div>
    </div>
  );
};
