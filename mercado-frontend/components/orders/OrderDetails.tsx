import { Quantity } from "@/types/order";

type OrderDetailsProps = {
  quantities: Quantity[];
};

const OrderDetails = ({ quantities }: OrderDetailsProps) => {
  return (
    <ul>
      {quantities.map((quantity) => (
        <li key={quantity.product.id}>
          {quantity.product.name}: {quantity.product.price}€ x{" "}
          {quantity.quantity}
        </li>
      ))}
    </ul>
  );
};

export default OrderDetails;
