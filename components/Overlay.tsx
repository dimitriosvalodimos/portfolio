import { motion } from "framer-motion";
import { ReactNode } from "react";

const Overlay = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

export default Overlay;

const overlayVariants = {
  hidden: { backgroundColor: "rgba(0,0,0,0)" },
  visible: { backgroundColor: "rgba(0,0,0,0.5)" },
};
