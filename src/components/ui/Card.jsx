import { motion } from "framer-motion";

const Card = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:border-white/30"
    >
      {children}
    </motion.div>
  );
};

export default Card;