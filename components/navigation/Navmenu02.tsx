"use client";
import Link from "next/link";
import { useState } from "react";

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
const navlink = [
  { key: 0, href: "/", text: "Home" },
  { key: 1, href: "/", text: "Menu" },
  { key: 2, href: "/", text: "Menu" },
  { key: 3, href: "/", text: "Menu" },
  { key: 4, href: "/", text: "Menu" },
];

interface Props {
  className: string;
}
export function Navbar({ className }: Props) {
  return (
    <nav className={className}>
      {navlink.map((link) => (
        <Link
          className="px-4 py-1 font-semibold hover:scale-[0.95] transition-transform ease-in-out"
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
    <header className="fixed left-0 mx-auto w-full flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <Link className="font-bold" href={"/"}>
          Logo
        </Link>
        <Navbar className="ml-4 flex items-center " />
      </div>
      <div>social</div>
    </header>
  );
}
