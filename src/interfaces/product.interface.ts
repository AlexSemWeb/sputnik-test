import type { CurrencyEnum } from './currency.interface';

/**
 * Продукт
 */
export interface Product {
  /**
   * УН продукта
   */
  id: number;

  /**
   * Название продукта
   */
  title: string;

  /**
   * Цена продукта в копейках
   */
  price: number;

  /**
   * Страна происхождения продукта
   */
  origin: string;

  /**
   * Валюта цены продукта
   */
  currency: CurrencyEnum;

  /**
   * Ссылка на картинку продукта
   */
  imageUrl: string;
}
