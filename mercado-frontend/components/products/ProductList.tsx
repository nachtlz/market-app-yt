import React, { useEffect, useState } from "react";
import { GATEWAY_URL } from "@/constants";
import ProductItem from "./ProductItem";
import EditProductModal from "./EditProductModal";
import AddProductModal from "./AddProductModal";

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${GATEWAY_URL}/api/products`);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleUpdateProduct = async (updatedProduct: Product) => {
    try {
      const response = await fetch(
        `${GATEWAY_URL}/api/products/${updatedProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setIsEditModalOpen(false);
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProduct = async (newProduct: Product) => {
    try {
      const response = await fetch(`${GATEWAY_URL}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const createdProduct = await response.json();
        setProducts((prevProducts) => [...prevProducts, createdProduct]);
        setIsAddModalOpen(false);
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-end mx-10 mb-4">
        <button
          className="bg-green-600 text-white p-2 rounded-lg"
          onClick={() => setIsAddModalOpen(true)}
        >
          Añadir Producto
        </button>
      </div>
      <div className="grid grid-cols-6 gap-4 mx-10">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onEdit={handleEditClick}
          />
        ))}
      </div>
      <EditProductModal
        product={selectedProduct}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleUpdateProduct}
      />
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddProduct}
      />
    </div>
  );
};

export default ProductList;
