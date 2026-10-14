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
      className="group relative flex h-[9px] w-6 cursor-pointer flex-col justify-between items-center"
    >
      {/* Larger invisible click area, like _interactiveArea */}
      <span className="absolute -left-2.5 -top-3.5 h-[calc(100%+26px)] w-[calc(100%+20px)]" />

      {/* Top line: moves down 4px and rotates */}
      <span
        className={`${line} ${
          open
            ? "translate-y-1 rotate-45"
            : "group-hover:translate-y-[1.5px] group-hover:scale-y-50"
        }`}
      />

      {/* Middle line: fades out */}
      <span
        className={`${line} ${open ? "opacity-0" : "group-hover:scale-y-50"}`}
      />

      {/* Bottom line: moves up 4px and rotates the other way */}
      <span
        className={`${line} ${
          open
            ? "-translate-y-1 -rotate-45"
            : "group-hover: -translate-y-[1.5px] group-hover:scale-y-50"
        }`}
      />
    </button>
  );
}
