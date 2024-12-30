import React from "react";

const WarningIcon = (props: any) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        d="M12 2.25C6.62 2.25 2.25 6.62 2.25 12C2.25 17.38 6.62 21.75 12 21.75C17.38 21.75 21.75 17.38 21.75 12C21.75 6.62 17.38 2.25 12 2.25ZM10.6 8C10.5 7.5 10.5 6.5 12 6.5C13.5 6.5 13.5 7.5 13.4 8L12.65 13C12.65 13.36 12.36 13.65 12 13.65C11.64 13.65 11.35 13.36 11.35 13L10.6 8ZM12 17C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16C13 16.55 12.55 17 12 17Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WarningIcon;
