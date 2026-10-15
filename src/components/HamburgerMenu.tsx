// src/components/HamburgerMenu.tsx
type HamburgerMenuProps = {
  open: boolean;
  onClick: () => void;
};

export default function HamburgerMenu({ open, onClick }: HamburgerMenuProps) {
  const line =
    "block h-px w-full bg-gray-400 transition-all duration-300 ease-in-out";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={open}
      className="group relative flex cursor-pointer gap-3 items-center"
    >
      <span className="text-white/70 font-suisse text-[13px] font-light">
        home
      </span>

      <span className="relative flex h-[9px] w-6 flex-col items-center justify-between">
        <span className="absolute -left-2.5 -top-3.5 h-[calc(100%+26px)] w-[calc(100%+20px)]" />

        <span
          className={`${line} ${
            open
              ? "translate-y-1 rotate-45"
              : "group-hover:translate-y-[1.5px] group-hover:scale-y-50"
          }`}
        />

        <span
          className={`${line} ${open ? "opacity-0" : "group-hover:scale-y-50"}`}
        />

        <span
          className={`${line} ${
            open
              ? "-translate-y-1 -rotate-45"
              : "group-hover: -translate-y-[1.5px] group-hover:scale-y-50"
          }`}
        />
      </span>
    </button>
  );
}
