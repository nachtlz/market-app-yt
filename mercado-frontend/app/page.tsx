"use client";

import { useUser } from "@/modules/UserContext";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import OrderList from "@/components/orders/OrderList";
import { useEffect } from "react";

const Page = () => {
  const { user, authenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      router.push("/login");
    }
  }, [authenticated]);

  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        <h1 className="text-2xl font-semibold text-center my-6">
          Bienvenido {user.username}
        </h1>
        <OrderList />
      </div>
    </div>
  );
};

export default Page;
