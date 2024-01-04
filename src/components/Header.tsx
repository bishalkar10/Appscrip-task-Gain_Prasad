import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="w-full px-4 md:px-24 pt-4 mb-4 md:pt-9 md:pb-6 md:mb-[72px]">
      <div className="w-full flex justify-between items-center mb-8 md:mb-[60px]">
        <div className="flex flex-1">
          <FontAwesomeIcon icon={faBars} className="h-5 w-5 md:hidden mr-2" />
          <Image
            src={"logo.svg"}
            alt={"logo-image"}
            width={36}
            height={36}
            className="h-5 w-5 md:h-9 md:w-9"
          />
        </div>
        <h1
          className={`text-xl ${inter.className} text-center flex-1 md:text-4xl font-extrabold mx-auto`}
        >
          LOGO
        </h1>
        <div className="flex flex-1 items-center justify-center gap-x-3 md:gap-x-6">
          <Image
            src={"search-icon.svg"}
            alt={"search-icon"}
            width={24}
            height={24}
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <Image
            src={"heart.svg"}
            alt={"heart-icon"}
            width={24}
            height={24}
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <Image
            src={"shopping-bag.svg"}
            alt={"shopping-bag-icon"}
            width={24}
            height={24}
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <Image
            src={"profile.svg"}
            alt={"profile-icon"}
            width={24}
            height={24}
            className="hidden md:block"
          />
          <div className="hidden md:flex items-center gap-2">
            ENG
            <FontAwesomeIcon
              icon={faAngleRight}
              className="h-4 transfrom rotate-90"
            />
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
