import { motion } from "framer-motion";
import React from "react";
function Back() {
  return (
    <>
      <motion.span
        aria-hidden="true"
        id="bg"
        layoutId="bg"
        transition={{ duration: 0.4 }}
      ></motion.span>
    </>
  );
}

export { Back };
