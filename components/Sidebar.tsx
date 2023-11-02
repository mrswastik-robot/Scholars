"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div
      className=" space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white"
    //   data-aos="fade-right"
    //   data-aos-easing="linear"
    //   data-aos-duration="1000"
    >
      <div className=" px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className=" relative w-[7rem] h-[7rem] mr-4">
            <Image src="/scholar.svg" fill alt="logo" />
          </div>
        </Link>

        <div className="  space-y-1">
          <div>
            <ul className="flex flex-col space-y-9 justify-center mt-6 ">
              <li className="cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold">
                <Link href="about">Glimpses</Link>
              </li>
              <li className="cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold">
                <Link href="cards"> Events </Link>
              </li>
              <li className="cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold">
                <Link href="feature"> Features </Link>
              </li>
              <li className="cursor-pointer hover:scale-125 transition hover:text-gray-600 hover:font-bold">
                <Link href="newsletter"> Newsletter </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
