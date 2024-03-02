"use client";
import Link from "next/link";
import Image from "next/image";
import { navlink } from "./constants";
import { Rocket } from "lucide-react";
export default function MegaMenu1() {
  const data = navlink[0];
  return (
    <div className="flex items-center justify-between px-6 py-4 border-separate">
      <div className="flex items-center">
        <Image src={"/berrynet.svg"} width={140} height={30} alt="Logo" />
        <nav className="flex items-center ml-6">
          {navlink.map((links) => (
            <Link
              className="flex items-center gap-2 group py-3 px-3 hover:bg-zinc-100 rounded-md"
              key={links.key}
              href={links.pathname}
            >
              <span className="font-medium">{links.text}</span>
              <span className="group-hover:rotate-180 transition-transform ease-linear">
                {links.icon}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <Link
        className="flex items-center gap-2 group py-3 px-5 text-white font-semibold bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-md"
        href={"/"}
      >
        <Rocket />
        <span>Subscribe Now!</span>
      </Link>
    </div>
  );
}
