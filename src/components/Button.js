import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick,
  type,
  className,
  initial,
  animate,
  transition,
  whileHover,
  whileTap,
}) => {
  return (
    <motion.button
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      onClick={onClick}
      type={type || "button"}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.button>
  );
};

export default Button;
