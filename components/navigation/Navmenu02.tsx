"use client";
import Link from "next/link";
import { useState } from "react";
import { sociallink } from "@/app/lib/iconsSocial";
import { navlink } from "@/app/constants/navlink";
const icons = {
  menu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  ),
  close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
    </svg>
  ),
};

interface Props {
  className: string;
}
export function Navbar({ className }: Props) {
  return (
    <nav className={className}>
      {navlink.map((link) => (
        <Link
          className="px-4 py-2 hover:bg-stone-200 rounded-lg transition-color ease-in-out"
          key={link.key}
          href={link.href}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

export default function NavMenu2() {
  return (
    <header className="fixed left-0 mx-auto w-full flex items-center justify-between gap-2 px-8 py-4 bg-stone-100 shadow-md">
      <div className="flex items-center">
        <Link className="text-2xl font-bold" href={"/"}>
          Logo
        </Link>
        <Navbar className="ml-4 flex items-center " />
      </div>
      <div className="flex items-center gap-3">
        {sociallink.map((iconlink) => (
          <a className="fill-stone-900" key={iconlink.key} href={iconlink.url}>
            <span className="">{iconlink.icons}</span>
          </a>
        ))}
      </div>
    </header>
  );
}
