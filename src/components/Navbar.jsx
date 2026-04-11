import { motion } from "framer-motion";
import Container from "./ui/Container";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10"
    >
      <Container>
        <div className="flex justify-between py-4">

          <h1 className="font-bold">Mihir Shirsath</h1>

          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;