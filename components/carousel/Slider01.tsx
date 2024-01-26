"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const content = [
  {
    id: 0,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-1.jpeg",
    imageAlt: "this image",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-3.jpeg",
    imageAlt: "this image",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-4.jpeg",
    imageAlt: "this image",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-1.jpeg",
    imageAlt: "this image",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-2.jpeg",
    imageAlt: "this image",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-3.jpeg",
    imageAlt: "this image",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-4.jpeg",
    imageAlt: "this image",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
    imageUrl: "/imagegradient-2.jpeg",
    imageAlt: "this image",
  },
];
export default function Carousel01() {
  let [isNext, setIsNext] = useState(0);
  let [isPrev, setIsPrev] = useState(0);
const handleClick = () =>{
    setIsNext = 200;
}
  return (
    <section className="flex items-center justify-center h-[100svh] w-full">
      <div>
        <div className="flex items-center justify-between w-full ">
          <span className="font-bold ">This Your Text</span>
          <div className="flex items-center gap-5">
            <button type="button">prev</button>
            <button type="button">next</button>
          </div>
        </div>
        <div className="flex ites-center gap-3 overflow-scroll snap-always snap-x max-w-screen-md snap-mandatory mx-auto py-3">
          {content.map((link) => (
            <Link
              className="flex-1 bg-black/5 rounded-xl border border-black/10 min-w-[350px]"
              key={link.id}
              href={link.url}
            >
              <div>
                <Image
                  className="aspect-video rounded-t-xl w-full"
                  src={link.imageUrl}
                  width={500}
                  height={500}
                  alt={link.imageAlt}
                />
              </div>
              <div className="p-5">
                <span className="font-bold text-2xl text-wrap leading-none">
                  {link.title}
                </span>
                <span className="line-clamp-2 text-sm">{link.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
