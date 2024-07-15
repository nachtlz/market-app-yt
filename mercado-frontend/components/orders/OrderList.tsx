import OrderCard from "@/components/orders/OrderCard";
import { Order } from "@/types/order";
import { useEffect, useState } from "react";
import { useUser } from "@/modules/UserContext";
import { GATEWAY_URL } from "@/constants";

const OrderList = () => {
  const { user } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch(`${GATEWAY_URL}/api/orders/person/${user.id}`);
      const data = await res.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  const calculateTotal = (order: Order) => {
    return order.quantities.reduce((sum, quantity) => {
      return sum + quantity.product.price * quantity.quantity;
    }, 0);
  };

  return (
    <div className="grid grid-cols-6 gap-4 mx-10">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} total={calculateTotal(order)} />
      ))}
    </div>
  );
};

export default OrderList;
