import ErrorMessage from "@/components/ErrorMessage";
import { ProductStock } from "@/types/order";

type ProductListProps = {
  products: ProductStock[];
  setProducts: React.Dispatch<React.SetStateAction<ProductStock[]>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const ProductCatalog: React.FC<ProductListProps> = ({
  products,
  setProducts,
  error,
  setError,
}) => {
  const incrementQuantity = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          if (product.stock > 0) {
            return {
              ...product,
              stock: product.stock - 1,
              quantity: product.quantity + 1,
            };
          } else {
            setError("El producto no tiene más stock");
            setTimeout(() => {
              setError(null);
            }, 3000);
            return product;
          }
        }
        return product;
      })
    );
  };

  const decrementQuantity = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id && product.quantity > 0) {
          return {
            ...product,
            stock: product.stock + 1,
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ErrorMessage error={error} />
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full bg-white p-4 rounded-lg shadow-md border border-gray-200 my-1"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">{product.name}</p>
              <p className="">{product.price}€</p>
              <p className="">{product.stock} unidades</p>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="inline-block rounded-full bg-blue-600 w-12 h-12 uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong flex items-center justify-center"
                onClick={() => incrementQuantity(product.id)}
              >
                <span className="text-2xl font-bold">+</span>
              </button>
              <div className="flex items-center">
                <p className="mx-5 text-xl pb-2">{product.quantity}</p>
              </div>
              <button
                type="button"
                className="inline-block rounded-full bg-blue-600 w-12 h-12 uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong flex items-center justify-center"
                onClick={() => decrementQuantity(product.id)}
              >
                <span className="text-2xl font-bold">-</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
