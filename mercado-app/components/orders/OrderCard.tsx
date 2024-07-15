import { Order } from "@/types/order";
import OrderDetails from "@/components/orders/OrderDetails";

type OrderCardProps = {
  order: Order;
  total: number;
};

const OrderCard = ({ order, total }: OrderCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold">Orden {order.id}</h2>
      <OrderDetails quantities={order.quantities} />
      <h3 className="text-l font-semibold">Total: {total}€</h3>
    </div>
  );
};

export default OrderCard;
