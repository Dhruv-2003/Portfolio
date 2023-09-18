import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import Image from "next/image";
import headerDesign from "./Header.module.scss";
import homeDesign from "../../styles/Home.module.scss";

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

const Header = () => (
  <div className={`${headerDesign.app__header} ${homeDesign.app__flex}`}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={headerDesign.app__header_info}
    >
      <div className={headerDesign.app__header_badge}>
        <div className={`badge-cmp ${homeDesign.app__flex}`}>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Dhruv</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web3 Developer</p>
          <p className="p-text">Smart Contract Dev</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className={headerDesign.app__header_img}
    >
      <Image src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className={headerDesign.overlay_circle}
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className={headerDesign.app__header_circles}
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <Image src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

// const Header = () => {
//   return (
//     // <div className="flex justify-center items-center relative bg-[url('../assets/bgIMG.png')]  bg-cover bg-repeat bg-center w-full flex-col flex-1">
//     <div className="flex justify-center items-center  w-full h-full flex-1 p-[6rem_2rem_0] large:pt-32 ">
//       <motion.div
//         whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//         transition={{ duration: 0.5 }}
//         className=""
//       >
//         <div className="">
//           <div className="flex justify-center items-center">
//             <span>👋</span>
//             <div style={{ marginLeft: 20 }}>
//               <p className="text-[0.8rem] leading-normal text-left text-[#6b7688] large:text-[1.75rem]">
//                 Hello , I am{" "}
//               </p>
//               <h1 className="text-[2.75rem] font-extrabold text-center text-black capitalize large:text-[4rem] sm:text-[2rem]">
//                 Dhruv
//               </h1>
//             </div>
//           </div>

//           <div className="flex justify-center items-center">
//             <p className="text-[0.8rem] leading-normal text-left text-[#6b7688] large:text-[1.75rem]">
//               {" "}
//               Web3 developer{" "}
//             </p>
//             <p className="text-[0.8rem] leading-normal text-left text-[#6b7688] large:text-[1.75rem]">
//               {" "}
//               Smart Contract developer{" "}
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         whileInView={{ opacity: [0, 1] }}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className=""
//       >
//         <Image src={images.profile} alt="profile-bg" />
//         <motion.img
//           whileInView={{ scale: [0, 1] }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className=""
//           src={images.circle}
//           alt="profile_circle"
//         ></motion.img>
//       </motion.div>

//       <motion.div
//         variant={scaleVariants}
//         whileInView={{ scale: [0, 1], opacity: [0, 1] }}
//         // transition={{ duration: 1, ease: 'easeInOut' }}
//         className=""
//       >
//         {[images.flutter, images.redux, images.sass].map((circle, index) => (
//           <div className="" key={`circle-${index}`}>
//             <Image src={circle} alt="circle" />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//     // </div>
//   );
// };

export default Header;
