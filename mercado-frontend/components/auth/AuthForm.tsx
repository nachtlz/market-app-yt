"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/modules/UserContext";
import ErrorMessage from "@/components/ErrorMessage";
import AuthInput from "./AuthInput";

type AuthFormProps = {
  title: string;
  apiUrl: string;
  successMessage: string;
  errorMessage: string;
  redirectPath: string;
  redirectLinkText: string;
  redirectRoute: string;
};

const AuthForm = ({
  title,
  apiUrl,
  successMessage,
  errorMessage,
  redirectPath,
  redirectLinkText,
  redirectRoute,
}: AuthFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setAuthenticated, setUser } = useUser();
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!username || !password) {
      setError("Rellena la información necesaria");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, password }),
      });

      if (!res.ok) {
        setError(errorMessage);
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      }

      const data = await res.json();
      setUser({ username: data.name, id: data.id });
      setAuthenticated(true);
      router.push("/");
    } catch (error) {
      setError(errorMessage);
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-xl">
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h3 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-green-600 md:text-5xl lg:text-6xl dark:text-green-600">
          {title}
        </h3>
        <ErrorMessage error={error} />
        <AuthInput
          id="username"
          label="Nombre de usuario"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <AuthInput
          id="password"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {loading ? "Cargando..." : successMessage}
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-green-600 hover:text-green-800"
            href="#"
            onClick={() => router.push(redirectRoute)}
          >
            {redirectLinkText}
          </a>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
