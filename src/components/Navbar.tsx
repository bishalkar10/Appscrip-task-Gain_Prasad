import React from "react";
export default function Navbar() {
  return (
    <nav>
      <ul className="w-full hidden md:flex items-center justify-center gap-16">
        <li className="font-bold text-primary uppercase tracking-[1px]">
          SHOP
        </li>
        <li className="font-bold text-primary uppercase tracking-[1px]">
          SKILLS
        </li>
        <li className="font-bold text-primary uppercase tracking-[1px]">
          STORIES
        </li>
        <li className="font-bold text-primary uppercase tracking-[1px]">
          ABOUT
        </li>
        <li className="font-bold text-primary uppercase tracking-[1px]">
          CONTACT US
        </li>
      </ul>
      <ul className="md:hidden flex items-center justify-start gap-2 text-[#BFC8CD]">
        <li className="text-xs uppercase">HOME</li> |
        <li className="text-xs uppercase text-primary">SHOP</li>
      </ul>
    </nav>
  );
}
