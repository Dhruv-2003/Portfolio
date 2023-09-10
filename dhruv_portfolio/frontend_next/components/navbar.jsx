import React from "react";
import { images } from "../constants/index.ts";
import Image from "next/image";

// import logo from "../assets/logo.png";

const navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-1 px-2 bg-white/[0.25] backdrop-blur-sm border border-solid border-white/[0.18] fixed z-2">
      <div className="flex justify-start items-center">
        <Image src={images.logo} alt="logo" />
      </div>
      <ul className="flex-1 flex items-center justify-center list-none">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className="group mx-4 text-left text-lg lg:text-2xl leading-5 text-[#6b7688] cursor-pointer flex-col flex justify-center items-center"
            key={`link-${item}`}
          >
            <div className="w-1.5 h-1.5 bg-transparent mb-5 group-hover:bg-[#313bac] rounded" />
            <a
              className="text-[#6b7688] no-underline flex-col uppercase font-medium transition duration-300 ease-in-out hover:text-[#313bac]"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navbar;
