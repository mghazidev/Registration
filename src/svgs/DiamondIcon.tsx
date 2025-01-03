import React from "react";

const DiamondIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill="#F5F5FF"
      />
      <rect
        width="6"
        height="6"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 12 7.75732)"
        fill="#5D00BA"
      />
    </svg>
  );
};

export default DiamondIcon;
