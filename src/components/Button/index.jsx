import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[24px]" };
const variants = {
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
  fill: {
    white_A700: "bg-white-A700 text-blue-500",
    blue_50: "bg-blue-50",
    blue_500: "bg-blue-500 text-white-A700",
  },
};
const sizes = { xs: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "blue_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["white_A700", "blue_50", "blue_500"]),
};

export { Button };
