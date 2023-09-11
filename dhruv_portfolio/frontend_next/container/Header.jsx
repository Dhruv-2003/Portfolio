import React from "react";
import { motion } from "framer-motion";
import { images } from "../constants";
import Image from "next/image";

const Header = () => {
  return (
    // <div className="flex justify-center items-center relative bg-[url('../assets/bgIMG.png')]  bg-cover bg-repeat bg-center w-full flex-col flex-1">
    <div className="flex justify-center items-center  w-full h-full flex-1 p-[6rem_2rem_0] large:pt-32 ">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="">
          <div className="flex justify-center items-center">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="text-[0.8rem] leading-normal text-left text-[#6b7688] large:text-[1.75rem]">
                Hello , I am{" "}
              </p>
              <h1 className="text-[2.75rem] font-extrabold text-center text-black capitalize large:text-[4rem] sm:text-[2rem]">
                Dhruv
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-[0.8rem] leading-normal text-left text-[#6b7688] large:text-[1.75rem]">
              {" "}
              Web3 developer{" "}
            </p>
            <p className="text-[0.8rem] leading-normal text-left text-[#6b7688] large:text-[1.75rem]">
              {" "}
              Smart Contract developer{" "}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className=""
      >
        <Image src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=""
          src={images.circle}
          alt="profile_circle"
        ></motion.img>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        // transition={{ duration: 1, ease: 'easeInOut' }}
        className=""
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="" key={`circle-${index}`}>
            <Image src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
    // </div>
  );
};

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export default Header;
