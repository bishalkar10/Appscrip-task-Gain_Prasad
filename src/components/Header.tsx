import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { Inter } from "next/font/google";
import "../styles/header.css";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header id="header">
      <div className="flex-container">
        <div className="logo-container">
          <FontAwesomeIcon icon={faBars} className="fa-bar-icon" />
          <Image
            src={"logo.svg"}
            alt={"logo-image"}
            width={36}
            height={36}
            className="logo-icon"
          />
        </div>
        <h1 className={`logo-title ${inter.className}`}>LOGO</h1>
        <div className="icon-container">
          <Image
            src={"search-icon.svg"}
            alt={"search-icon"}
            width={24}
            height={24}
            className="icon"
          />
          <Image
            src={"heart.svg"}
            alt={"heart-icon"}
            width={24}
            height={24}
            className="icon"
          />
          <Image
            src={"shopping-bag.svg"}
            alt={"shopping-bag-icon"}
            width={24}
            height={24}
            className="icon"
          />
          <Image
            src={"profile.svg"}
            alt={"profile-icon"}
            width={24}
            height={24}
            className="icon profile"
          />
          <div className="language-options">
            ENG
            <FontAwesomeIcon icon={faAngleRight} className="icon" />
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
