import { Product, Order, Quantity, ProductStock } from "@/types/order";

export const mapProductStockToProduct = (
  productStock: ProductStock
): Product => {
  const { id, name, price, stock } = productStock;
  return { id, name, price, stock };
};

export const mapProductStockToQuantity = (
  productStock: ProductStock
): Quantity => ({
  product: mapProductStockToProduct(productStock),
  quantity: productStock.quantity,
});

export const mapProductStocksToQuantities = (
  productStocks: ProductStock[]
): Quantity[] => productStocks.map(mapProductStockToQuantity);

export const createOrder = (
  id: string,
  personId: string,
  productStocks: ProductStock[]
): Order => ({
  id,
  personId,
  quantities: mapProductStocksToQuantities(productStocks),
});
