import React from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />

      <div className="flex-grow flex items-start md:items-center justify-center bg-primary-white md:bg-brand-100">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default SignupPage;
