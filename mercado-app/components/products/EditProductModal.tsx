import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

type EditProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
};

const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onSave,
}) => {
  const [editedProduct, setEditedProduct] = React.useState<Product | null>(
    product
  );

  React.useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedProduct) {
      setEditedProduct({
        ...editedProduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = () => {
    if (editedProduct) {
      onSave(editedProduct);
    }
  };

  if (!isOpen || !editedProduct) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Editar Producto</h2>
        <div>
          <label className="block mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Precio</label>
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Stock</label>
          <input
            type="number"
            name="stock"
            value={editedProduct.stock}
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

export default EditProductModal;
