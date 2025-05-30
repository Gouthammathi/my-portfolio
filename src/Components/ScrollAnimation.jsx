import React from 'react';
import { motion } from 'framer-motion';

export const ScrollAnimation = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
};