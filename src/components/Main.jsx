"use client";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Photo from "./Photo";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";
const Main = () => {
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.95, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="md:max-w-7xl w-full md:mx-auto md:flex-row md:gap-20 flex flex-col gap-4 items-center px-4">
      <div className="flex flex-col md:gap-10 gap-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="md:text-xl text-lg text-zinc-50 font-semibold">
            Software Developer
          </p>
          <h1 className="font-bold text-zinc-50 md:text-7xl text-4xl">
            Hello I'm{" "}
            <motion.span
              className="md:text-7xl text-4xl font-bold text-fuchsia-500"
              variants={pulseVariants}
              animate="pulse"
            >
              Sumiya
            </motion.span>
          </h1>
        </motion.div>
        <div className="flex flex-col gap-2 lg:w-[550px]">
          <p className="text-zinc-50">
            A full-stack developer who delivers intuitive, high-performance user
            experiences.
          </p>
          <p className="text-zinc-50">
            Bridging design and deployment with the JavaScript ecosystem. I
            architect and develop end-to-end applications, utilizing React for
            powerful UIs and Node.js to ensure efficient data management and API
            performance.
          </p>
        </div>
        <div className="flex md:gap-6 gap-4 justify-end md:justify-start">
          <SocialLink icon={FaGithub} href="https://github.com/Sumiya2323" />
          <SocialLink
            icon={FaLinkedinIn}
            href="https://www.linkedin.com/in/sumiya-g/"
          />
          <SocialLink icon={FaTwitter} href="https://x.com/" />
        </div>
      </div>
      <div>
        <Photo />
      </div>
    </div>
  );
};
export default Main;
