import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Mercado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex items-center justify-center w-3/4 bg-green-500">
          <img src="/login.jpg" alt="Mercado" className="h-full object-cover" />
        </div>

        <div className="flex items-center justify-center w-1/2">{children}</div>
      </div>
    </>
  );
}
