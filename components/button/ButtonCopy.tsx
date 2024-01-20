"use client";
import { useState } from "react";
const icons = {
  copy: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
      <path d="M6 12h6v2H6zm0 4h6v2H6z"></path>
    </svg>
  ),
  checklist: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
    </svg>
  ),
};
export default function ButtonCopy() {
  const [isCopy, setIsCopy] = useState(false);

  const yourMail = "yourmail@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(yourMail).then(() => {
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 1000);
    });
  };
  return (
    <button
      className="flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-100"
      onClick={handleCopy}
    >
      <span>{isCopy ? icons.checklist : icons.copy}</span>
      <span className="font-semibold">{isCopy ? "Copy" : "E-Mail"}</span>
    </button>
  );
}
