import React, { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

type AddProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
};

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: "",
    name: "",
    price: 0,
    stock: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(newProduct);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Añadir Producto</h2>
        <div>
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Precio</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Stock</label>
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-green-600 text-white p-2 rounded-lg"
            onClick={handleSave}
          >
            Guardar
          </button>
          <button
            className="bg-gray-500 text-white p-2 rounded-lg"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
