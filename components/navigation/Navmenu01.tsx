"use client";
import Link from "next/link";
import { useState } from "react";
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

export default function NavMenu1() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <header className="fixed left-0 w-full mx-auto flex items-center justify-between px-10 py-4 bg-stone-50 z-50 shadow-md">
      <Link className="font-bold" href={"/"}>
        Logo
      </Link>
      <Navbar className="flex items-center max-sm:hidden" />
      <div className="flex items-center justify-center sm:hidden border border-stone-300 rounded-md p-[3px]">
        <input
          className="w-7 h-7 opacity-0 cursor-pointer z-10"
          aria-checked="false"
          type="checkbox"
          name="navbarOpen"
          id="navbarOpen"
          onClick={toggleNavbar}
        />
        <span className="absolute z-[1]">
          {navbarOpen ? icons.close : icons.menu}
        </span>
      </div>
      {navbarOpen && (
        <Navbar className="max-sm:flex items-start flex-col md:hidden absolute left-0 top-14 z-[-1] bg-stone-50 w-full h-max p-6 py-2" />
      )}
    </header>
  );
}
