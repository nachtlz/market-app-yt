"use client";

import AuthForm from "@/components/auth/AuthForm";
import { GATEWAY_URL } from "@/constants";

const LoginPage = () => {
  return (
    <AuthForm
      title="Iniciar sesión"
      apiUrl={`${GATEWAY_URL}/api/persons/login`}
      successMessage="Iniciar sesión"
      errorMessage="Datos incorrectos"
      redirectPath="/register"
      redirectLinkText="¡Regístrate!"
      redirectRoute="/register"
    />
  );
};

export default LoginPage;
