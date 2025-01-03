import React from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      <div className="flex-grow flex items-center justify-center bg-brand-100">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default SignupPage;
