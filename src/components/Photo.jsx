"use client";
import Image from "next/image";
import { animate, motion } from "framer-motion";
const Photo = () => {
  const imageVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        striffness: 100,
        damping: 20,
        delay: 0.5,
        duration: 1.2,
      },
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };
  return (
    <div className="w-full h-full relative">
      <motion.div
        className="md:w-[398px] md:h-[398px] w-[298px] h-[298px] rounded-full  overflow-hidden shadow-2xl shadow-fuchsia-600/50 flex justify-center items-center"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
      >
        <Image
          src="/Photo.jpg"
          priority
          quality={100}
          fill={true}
          style={{ width: "100%", height: "100%", objectPosition: "center" }}
          alt=""
          className="object-contain rounded-full"
        />
      </motion.div>
    </div>
  );
};
export default Photo;
