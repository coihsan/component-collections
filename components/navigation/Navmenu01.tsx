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
  toggleOpen: () => void;
}
export function Hamburger({ toggleOpen }: Props) {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="relative sm:flex items-center justify-center md:hidden bg-rose-600">
      <span className="absolute  w-7 h-7 opacity-25 top-0">
        {isClick ? icons.close : icons.menu}
      </span>
      <input
        className="absolute w-7 h-7 opacity-25 top-0"
        aria-checked="false"
        type="checkbox"
        name=""
        id=""
        onClick={toggleOpen}
      />
    </div>
  );
}
export function Navbar() {
  return (
    <nav className="max-sm:flex items-center flex-col md:hidden absolute z-0">
      {navlink.map((link) => (
        <Link
          className="px-4 py-1 font-semibold"
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
    <header className="flex items-center justify-between px-10 py-4 bg-lime-500 z-50">
      <Link className="font-bold" href={"/"}>
        Logo
      </Link>
      <nav className="flex items-center max-sm:hidden">
        {navlink.map((link) => (
          <Link
            className="px-4 py-1 font-semibold"
            key={link.key}
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <Hamburger toggleOpen={toggleNavbar} />
      {navbarOpen && <Navbar />}
    </header>
  );
}
