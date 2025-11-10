import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  // Kata-kata yang akan berputar tetap relevan untuk solusi Cloud
  const words = ["Secure", "Modern", "Scalable"]; 
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View (Teks ini sudah benar) */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Asyraf Mubarak
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Full-Stack Cloud Engineer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      
      {/* Mobile View (Bagian ini dikoreksi agar konsisten dengan peran Anda) */}
      <div className="flex- flex-col space-y-6 md:hidden">
        {/* Mengganti nama menjadi Asyraf Mubarak */}
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Asyraf Mubarak
        </motion.p>
        <div>
          {/* Mengganti teks agar lebih sesuai dengan Full-Stack Cloud Engineer */}
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          {/* Mengganti "Web Applications" menjadi "Cloud Solutions" atau mempertahankan "Web Solutions" */}
          <motion.p
            className="text-4xl font-black text-neutral-300" // Kelas neutral300 dikoreksi
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Cloud Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;