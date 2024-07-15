import { Metadata } from "next";

import "./globals.css";
import { UserProvider } from "@/modules/UserContext";

export const metadata: Metadata = {
  title: "Pedidos | Mercado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        {<body style={{ margin: 0 }}>{children}</body>}
      </UserProvider>
    </html>
  );
}
