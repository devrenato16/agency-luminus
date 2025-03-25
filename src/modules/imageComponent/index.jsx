import { motion } from "framer-motion";

const AnimatedPC = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 274.36 345.11"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      width="300"
      height="300"
    >
      {/* Monitor */}
      <motion.rect
        x="50"
        y="30"
        width="150"
        height="100"
        fill="black"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Teclado */}
      <motion.rect
        x="60"
        y="140"
        width="130"
        height="30"
        fill="gray"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Botões laterais */}
      {[...Array(3)].map((_, i) => (
        <motion.circle
          key={i}
          cx="220"
          cy={60 + i * 40}
          r="10"
          fill="purple"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
        />
      ))}
    </motion.svg>
  );
};

export default AnimatedPC;
