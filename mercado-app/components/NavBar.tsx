"use client";

import { useUser } from "@/modules/UserContext";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { user, setAuthenticated, setUser } = useUser();

  const router = useRouter();

  return (
    <nav className="bg-white border-green-400 dark:bg-green-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img src="mercado.png" className="h-8" alt="Mercado Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Mercado
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-green-700 md:dark:bg-bg-green-700 dark:border-bg-green-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                onClick={() => router.push("/order")}
              >
                Hacer pedido
              </a>
            </li>
            {user.username == "admin" && (
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => router.push("/products")}
                >
                  Productos
                </a>
              </li>
            )}
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => {
                  setUser({ username: "", id: "" });
                  setAuthenticated(false);
                  router.push("/login");
                }}
              >
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
