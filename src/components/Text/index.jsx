import React from "react";

const sizeClasses = {
  txtSourceSansProLight16: "font-light font-sourcesanspro",
  txtSourceSansProRegular14WhiteA700: "font-normal font-sourcesanspro",
  txtSourceSansProRegular18Blue500: "font-normal font-sourcesanspro",
  txtSourceSansProSemibold18: "font-semibold font-sourcesanspro",
  txtSourceSansProBold48WhiteA700: "font-bold font-sourcesanspro",
  txtSourceSansProRegular18Blue50: "font-normal font-sourcesanspro",
  txtSourceSansProRegular18: "font-normal font-sourcesanspro",
  txtSourceSansProRegular18Bluegray400: "font-normal font-sourcesanspro",
  txtSourceSansProRegular16WhiteA700: "font-normal font-sourcesanspro",
  txtSourceSansProRegular16: "font-normal font-sourcesanspro",
  txtSourceSansProRegular18Gray700: "font-normal font-sourcesanspro",
  txtSourceSansProSemibold20: "font-semibold font-sourcesanspro",
  txtSourceSansProRegular14: "font-normal font-sourcesanspro",
  txtSourceSansProBold48: "font-bold font-sourcesanspro",
  txtSourceSansProRegular12: "font-normal font-sourcesanspro",
  txtSourceSansProBold64: "font-bold font-sourcesanspro",
  txtSourceSansProBold20: "font-bold font-sourcesanspro",
  txtSourceSansProBold24: "font-bold font-sourcesanspro",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
