import NavBar from "@/components/NavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacer pedido | Mercado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col ">
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  );
}
