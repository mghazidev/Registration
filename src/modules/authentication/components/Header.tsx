import React from "react";
import Logo from "@/svgs/Logo";

const Header = () => {
  return (
    <div className="p-7 p-7 md:px-14 flex items-center justify-between bg-primary-white">
      <Logo />
      <p className="body-2-medium text-functional-500 ">Home</p>
    </div>
  );
};

export default Header;
