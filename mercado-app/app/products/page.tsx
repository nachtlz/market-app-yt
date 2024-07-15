"use client";

import ProductList from "@/components/products/ProductList";
import { useUser } from "@/modules/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OrderPage = () => {
  const { authenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.push("/login");
    }
  }, [authenticated, router]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-4">
        Gestiona los productos
      </h1>
      <ProductList />
    </div>
  );
};

export default OrderPage;
