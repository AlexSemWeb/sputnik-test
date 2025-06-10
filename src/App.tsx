import { ProductsList } from './components';
import productsMock from './mocks/products.mock.json';

import type { Product } from './interfaces';

export function App() {
  const products = productsMock as Product[];

  return <ProductsList products={products} />;
}
