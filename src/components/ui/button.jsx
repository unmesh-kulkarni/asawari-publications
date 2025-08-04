import React from "react";
import classNames from "classnames";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const baseStyles = "px-4 py-2 rounded font-medium transition duration-200";
  const variants = {
    primary:
      "bg-white text-black border border-black hover:bg-black hover:text-white",
    secondary:
      "bg-black text-white border border-black hover:bg-white hover:text-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}

export default Button;
