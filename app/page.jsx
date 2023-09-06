'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "./../public/ethioexam.png";
import menu from "./../public/menu-logo.svg";
import { useState } from "react";
import Hero, { Footer } from "./hero";

export default function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
    </main>
  );
}
export function Navbar() {
  const [toggle,useToggle] = useState(false);
  const handleMenu =()=>{
    useToggle(!toggle);
  }
    const link = [
    { link: "/home", title: "Home" },
    { link: "/department", title: "Department" },
    { link: "/about", title: "About" },
    { link: "/contact", title: "Contact" },
  ];
  return (<div>
<div className={`${toggle?'':"hidden"} absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-50`} onClick={handleMenu}></div>
  <div className="pt-5 sticky top-0 z-30 bg-white">
      <div className="flex justify-between relative">
        <Link href={"/home"}>
          <Image src={logo} width={200} height={100} className="ml-10" /></Link>
        <ul className="md:flex hidden lg:mr-20 md:mr-5">
          {link.map((link) => (
            <li
            key={link.link}
            className="flex py-5 px-2 mx-5 text-xl font-medium font-sans text-blue-500 xl:text-2xl"
            >
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex">
          <Image
            src={menu}
            width={50}
            height={100}
            className="mr-5 cursor-pointer"
            onClick={handleMenu}
            />
        </div>
        <div className={`${toggle?"absolute":"hidden"} top-0 bottom-0 left-0 right-0 z-10 bg-black duration-200 opacity-30`} onClick={handleMenu}></div>
        <div className={`absolute justify-center w-full content-center bg-blue-600 text-white duration-300 ${toggle?"top-0":"-top-[300px]"} z-20`}>
          <div>
          <h1 className="text-xl font-bold p-2 text-center">Menu</h1>
          <ul className="flex flex-col mt-3">
            {link.map((link) => (
              <li key={link.link} className="p-2 align-middle text-center">
                <Link href={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
            </div>
  );
}
