"use client";

import AuthForm from "@/components/auth/AuthForm";
import { GATEWAY_URL } from "@/constants";

const RegisterPage = () => {
  return (
    <AuthForm
      title="Registrarse"
      apiUrl={`${GATEWAY_URL}/api/persons`}
      successMessage="Registrar"
      errorMessage="Usuario ya registrado"
      redirectPath="/login"
      redirectLinkText="¿Ya tienes una cuenta? Inicia sesión"
      redirectRoute="/login"
    />
  );
};

export default RegisterPage;
