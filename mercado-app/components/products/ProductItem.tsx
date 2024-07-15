import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

type ProductItemProps = {
  product: Product;
  onEdit: (product: Product) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <ul>
        <li>ID: {product.id}</li>
        <li>Precio: {product.price}€</li>
        <li>Stock: {product.stock}</li>
      </ul>
      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white p-2 rounded-lg mt-2"
          onClick={() => onEdit(product)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
