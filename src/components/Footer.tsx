// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="flex px-[23px] py-[25px] text-text text-[8px] bg-navBackground justify-between m-[4.1667vw] font-[600]">
      <div className="tracking-[2px] font-eurostile">F/S ©2026</div>
      <div className="font-[500] tracking-[o.3em] uppercase opacity-40 text-[lenght:clamp(7px, calc(100vw_/_var(--base-width)_*_7), calc(100vw_/_var(--base-width)_*_7))]">
        intergrity through expression™
      </div>
      <div className="uppercase font-eurostile font-[600] text-[8px] leading-[10px] tracking-[2px] line-through">
        Sound off
      </div>
    </footer>
  );
}
