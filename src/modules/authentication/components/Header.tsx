import React from "react";
import Logo from "@/svgs/Logo";
import { cn } from "@/lib/utils";

type HeaderProps = {
  show?: boolean;
  showLogoOnMobileOnly?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  show = true,
  showLogoOnMobileOnly = false,
}) => {
  return (
    <div
      className={cn(
        "p-7 p-7 md:px-14 px-0 flex items-center bg-primary-white",
        show ? " justify-between" : "md:justify-end justify-between"
      )}
    >
      {showLogoOnMobileOnly ? (
        <div className="block md:hidden">
          <Logo />
        </div>
      ) : (
        show && <Logo />
      )}
      <p className="body-2-medium text-functional-500 ">Home</p>
    </div>
  );
};

export default Header;
