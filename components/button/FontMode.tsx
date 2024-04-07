import { useState, useEffect } from "preact/hooks";

export default function BoringMode() {
  const [theme, setTheme] = useState("boring");
  const styleButton = "bg-zinc-800/30 text-white border border-zinc-800/80 rounded-md font-bold flex items-center w-full justify-center gap-3 px-4 h-12"

  useEffect(() => {
    const storedTheme = localStorage.getItem("boring");

    if (storedTheme && ["boring", "eighties"].includes(storedTheme)) {
      setTheme(storedTheme);
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `/css/${theme}.css`;
    document.head.appendChild(link);

    return () => {
      link.remove();
    };
  }, [theme]);

  const updateTheme = (newTheme) => {
    localStorage.setItem("boring", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 w-full">
      <button
        type="button"
        onClick={() => updateTheme("boring")}
        className={styleButton}
      >
        {theme === "boring" ? <ImageCheck /> : null}
        <span className="font-boring">Boring Mode!</span>
      </button>
      <button
        type="button"
        onClick={() => updateTheme("eighties")}
        className={styleButton}
      >
        {theme === "eighties" ? <ImageCheck /> : null}
        <span className="text-xs font-eighties">Retro Mode!</span>
      </button>
    </div>
  );
}

const ImageCheck = () => {
  return (
    <img
      className="transition-all"
      src="/check.svg"
      alt="icon checked"
      width={24}
      height={24}
    />
  );
};
