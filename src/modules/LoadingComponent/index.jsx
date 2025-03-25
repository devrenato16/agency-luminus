import { Center, Text } from "@mantine/core";
import { motion } from "framer-motion";

import classes from "./loadingComponent.module.css";

function Loading() {
  return (
    <div className={classes.container}>
      <Center style={{ height: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <motion.img
            src="/Images/marca.webp"
            alt="Logo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ width: "150px", height: "auto" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.2 }}
          >
            <Text size="lg" mt="md" className={classes.text}>
              Luminus
            </Text>
          </motion.div>
        </div>
      </Center>
    </div>
  );
}

export default Loading;
