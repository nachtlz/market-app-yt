"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/modules/UserContext";
import { useRouter } from "next/navigation";
import { GATEWAY_URL } from "@/constants";
import { ProductStock } from "@/types/order";
import { createOrder } from "@/utils/orderUtils";
import ProductCatalog from "@/components/products/ProductCatalog";

const OrderPage = () => {
  const [products, setProducts] = useState<ProductStock[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${GATEWAY_URL}/api/products`);
        const data = await res.json();
        const productsWithQuantity = data.map((product: ProductStock) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productsWithQuantity);
      } catch (error) {
        setError("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const productsToOrder = products.filter((product) => product.quantity > 0);

    if (productsToOrder.length === 0) {
      setError("Selecciona al menos un producto");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }

    const order = createOrder("0", user.id, productsToOrder);

    try {
      const res = await fetch(`${GATEWAY_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!res.ok) {
        setError("Error al crear el pedido");
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      }

      const updatedProducts = productsToOrder.map((product) => ({
        ...product,
        stock: product.stock,
      }));

      const response = await fetch(`${GATEWAY_URL}/api/products/update-stock`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProducts),
      });

      if (!response.ok) {
        setError("Error al actualizar el stock");
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      }

      router.push("/");
    } catch (error) {
      setError("Error al procesar la solicitud");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-4">
        Escoge tus productos y haz tu pedido
      </h1>
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        <ProductCatalog
          products={products}
          setProducts={setProducts}
          error={error}
          setError={setError}
        />
        <div className="flex flex-row-reverse mt-5">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Crear pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
