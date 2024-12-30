import React from "react";
import NavBar from "../components/NavBar";
import RegistrationForm from "../components/RegistrationForm";
const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar />

      <div className="flex-grow flex items-center justify-center bg-brand-100">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default SignupPage;
