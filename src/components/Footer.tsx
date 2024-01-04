"use client";

import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  function handleClick(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    const icon: SVGSVGElement | null = (event.target as Element)?.closest(
      "svg"
    );
    icon?.classList.toggle("rotate-90");
    icon?.classList.toggle("rotate-270");
    const closestDiv: HTMLDivElement | null = (
      event.target as Element
    )?.closest("div"); // Find the closest parent div
    const ulElement = closestDiv?.nextElementSibling; // Find the next sibling element

    if (ulElement && ulElement.tagName === "UL") {
      // Toggle between hidden and flex
      ulElement.classList.toggle("hidden");
      ulElement.classList.toggle("flex");
    }
  }

  return (
    <footer className="bg-black w-full p-4 md:p-6 xl:p-[79px_64px_25px_128px] text-white grid md:grid-cols-7">
      {/*Be the first */}
      <div className="border-b pb-6 md:border-none border-solid border-[#E5E5E5] md:col-span-4">
        <h4 className="md:text-xl font-bold uppercase">Be the first to know</h4>
        <p className="md:hidden mt-2 mb-4 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </p>
        <p className="hidden md:block mt-6 text-base font-normal mb-[51px]">
          Sign up for updates from mettā muse.
        </p>
        <form className="w-full flex gap-2 md:gap-4">
          <input
            placeholder="Enter your e-mail..."
            className="p-[14px] w-40 flex-grow md:max-w-[336px]"
          />
          <button className=" basis-[30%] uppercase p-[13px] border-[rgba(256,256,256,0.3)] text-[rgba(256,256,256,0.3)] rounded-[5px] border border-solid">
            Subscribe
          </button>
        </form>
      </div>

      <div className="md:col-span-3 md:mr-4">
        {/*Contact*/}

        <div className="flex flex-col gap-4 mb-6 border-b md:border-none border-solid border-white pb-6 md:p-0">
          <h4 className="md:hidden mt-6 font-bold uppercase">Call US</h4>
          <h4 className=" hidden md:block text-xl font-bold uppercase">
            CONTACT US
          </h4>
          <div className="flex gap-2 items-center md:items-start md:flex-col md:gap-4">
            <a href="tel:+44 221 133 5360" className="text-sm md:text-base">
              +44 221 133 5360
            </a>
            <div className="md:hidden h-[6px] w-[6px] bg-white transform rotate-45"></div>
            <a
              href="mailto:customercare@mettamuse.com"
              className="text-sm md:text-base"
            >
              customercare@mettamuse.com
            </a>
          </div>
        </div>
        {/*Currrency*/}
        <div className="flex flex-col gap-4 border-b-2 md:border-none border-solid border-white pb-6 md:p-0">
          <h4 className="md:text-xl font-bold uppercase">Currency</h4>
          <div className="flex items-center justify-start gap-[5px]">
            <Image
              src={"US-flag.svg"}
              alt={"US flag Image"}
              height={0}
              width={0}
              className="w-6 h-auto"
            />
            <div className="h-[6px] w-[6px] bg-white transform rotate-45"></div>
            USD
          </div>
          <p className="hidden md:block text-xs">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className="hidden md:block md:col-span-7 mt-[26px] mb-14" />

      <div className="mt-6 border-b md:border-none border-solid border-white pb-6 md:p-0 md:mt-0 md:col-span-2">
        <div className="flex items-center justify-between">
          <h4 className="md:text-xl font-bold ">mettā muse</h4>
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={(event) => handleClick(event)}
            className="transition-transform transform rotate-90 h-4 md:hidden"
          />
        </div>
        <ul className="hidden md:flex flex-col gap-4 mt-[18px]">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Artisans</a>
          </li>
          <li>
            <a href="#">Boutiques</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">EU Compliances Docs</a>
          </li>
        </ul>
      </div>
      <div className="border-b md:border-none border-solid border-white pb-6 mt-6 md:mt-0 md:p-0 md:col-span-2">
        <div className="flex items-center justify-between">
          <h4 className="md:text-xl font-bold">Quick Links</h4>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="transform rotate-90 h-4 md:hidden"
          />
        </div>
        <ul className="hidden md:flex flex-col gap-4 mt-[18px]">
          <li>
            <a href="#">Orders & Shipping</a>
          </li>
          <li>
            <a href="#">Join/Login as a Seller</a>
          </li>
          <li>
            <a href="#">Payment & Pricing</a>
          </li>
          <li>
            <a href="#">Return & Refunds</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms $ Conditions</a>
          </li>
        </ul>
      </div>

      <div className="md:col-span-3 mt-6 md:mt-0">
        {/* Follow us*/}
        <div className="flex items-center justify-between">
          <h4 className="md:text-xl font-bold uppercase mb-6">Follow Us</h4>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="transform rotate-90 h-4 md:hidden"
          />
        </div>

        <ul className="hidden md:flex gap-3 mb-6 md:mb-14">
          <li className="p-2 inline-block rounded-full border border-solid border-white">
            <Image
              src={"/instagram-logo.png"}
              alt={"Picture of Instagram Logo"}
              height={0}
              width={0}
              className="w-5 h-auto"
            />
          </li>

          <li className="p-2 inline-block rounded-full border border-solid border-white">
            <Image
              src={"/linkedin-logo.png"}
              alt={"Picture of Linkedin Logo"}
              height={0}
              width={0}
              className="w-5 h-auto"
            />
          </li>
        </ul>

        <h4 className="md:text-xl font-bold mb-4">mettā muse Accepts</h4>
        <ul className="grid grid-cols-6 sm:flex flex-wrap gap-2">
          <li className="md:shrink-0 bg-white sm:w-14 h-9 rounded-md grid place-content-center">
            <Image
              src={"/G-Pay.svg"}
              width={0}
              height={0}
              alt={"Picture of G Pay"}
              className="w-10 h-auto"
            />
          </li>
          <li className="shrink-0 bg-white sm:w-14 h-9 rounded-md grid place-content-center">
            <Image
              src={"/master-card.svg"}
              width={0}
              height={0}
              alt={"Picture of MasterCard"}
              className="w-8 h-auto"
            />
          </li>
          <li className="shrink-0 bg-white sm:w-14 h-9 rounded-md grid place-content-center">
            <Image
              src={"/paypal.svg"}
              width={0}
              height={0}
              alt={"Picture of Paypal"}
              className="w-4 h-auto"
            />
          </li>
          <li className="shrink-0 bg-[#006FCF] sm:w-14 h-9 rounded-md grid place-content-center">
            <Image
              src={"/amex.svg"}
              width={0}
              height={0}
              alt={"Picture of Amex"}
              className="w-10 h-auto"
            />
          </li>
          <li className="shrink-0 bg-white sm:w-14 h-9 rounded-md grid place-content-center">
            <Image
              src={"/apple-pay.svg"}
              width={0}
              height={0}
              alt={"Picture of Apple Pay"}
              className=" w-10 h-auto"
            />
          </li>
          <li className="shrink-0 bg-[#5A31F4] sm:w-14 h-9 rounded-md grid place-content-center">
            <Image
              src={"/O-pay.svg"}
              width={0}
              height={0}
              alt={"Picture of O Pay"}
              className="w-10 h-auto"
            />
          </li>
        </ul>
      </div>
      <p className="md:col-span-7 text-sm md:text-base text-center mt-6 md:mt-20">
        Copyright &copy; 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
