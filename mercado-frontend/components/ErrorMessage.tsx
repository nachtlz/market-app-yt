import React from "react";

interface Props {
  error: string | null;
}

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    error && (
      <>
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 mb-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      </>
    )
  );
};

export default ErrorMessage;
