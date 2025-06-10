import type { CurrencyEnum } from 'src/interfaces';

/**
 * Функция приводит цену из целого числа в уодобочитаемый вид в зависимости от валюты
 * @param price - Цена продукта в копейках
 * @param currency - Валюта цены продукта
 * @returns Форматированную цену продукта
 */
export const formatPrice = (price: number, currency: CurrencyEnum) =>
  new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(
    price,
  );
