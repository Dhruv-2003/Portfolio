import React, { useState } from "react";
import { images } from "../../constants/index.ts";
import Image from "next/image";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import navbarDesign from "./Navbar.module.scss";

// import logo from "../assets/logo.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={navbarDesign.app__navbar}>
      <div className={navbarDesign.app__navbar_logo}>
        <Image src={images.logo} alt="logo" />
      </div>
      <ul className={navbarDesign.app__navbar_links}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={navbarDesign.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// const navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="w-full flex justify-between items-center py-1 px-2 bg-white/[0.25] backdrop-blur-sm border border-solid border-white/[0.18] fixed z-2">
//       <div className="flex justify-start items-center">
//         <Image
//           className="w-40 h-10 large:w-80 large:h-20"
//           src={images.logo}
//           alt="logo"
//         />
//       </div>
//       <ul className="flex-1 flex items-center justify-center list-none mobile:hidden">
//         {["home", "about", "work", "skills", "contact"].map((item) => (
//           <li
//             className="group mx-4 text-left text-sm large:text-2xl leading-5 text-[#6b7688] cursor-pointer flex-col flex justify-center items-center"
//             key={`link-${item}`}
//           >
//             <div className="w-1.5 h-1.5 bg-transparent mb-5 group-hover:bg-[#313bac] rounded" />
//             <a
//               className="text-[#6b7688] no-underline flex-col uppercase font-medium transition duration-300 ease-in-out hover:text-[#313bac]"
//               href={`#${item}`}
//             >
//               {item}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center relative bg-[#313bac] laptop:hidden">
//         <HiMenuAlt4
//           className="w-4/5 h-4/5 fill-white"
//           onClick={() => setToggle(true)}
//         />
//         {toggle && (
//           <motion.div
//             className="fixed inset-y-0 right-0 z-5 p-1 w-4/5 h-screen flex align-end justify-end flex-col bg-white bg-cover bg-repeat bg-[url('../assets/bgWhite.png')] shadow-[0_0_20px_rgba(168,168,168,0.15)]"
//             whileInView={{ x: [300, 0] }}
//             transition={{ duration: 0.85, ease: "easeOut" }}
//           >
//             <HiX
//               className="w-[35px] h-[35px] fill-[#313bac] mx-4 my-2"
//               onClick={() => setToggle(false)}
//             />
//             <ul className="list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col">
//               {["home", "about", "work", "skills", "contact"].map((item) => (
//                 <li className="my-4" key={item}>
//                   <div className="" />
//                   <a
//                     className="text-[#6b7688] text-base uppercase font-medium   transition duration-300 ease-in-out hover:text-[#313bac]"
//                     href={`#${item}`}
//                     onClick={() => setToggle(false)}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default navbar;
