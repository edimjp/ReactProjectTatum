export default function Footer() {
  return (
    <footer className="flex px-[23px] py-[25px] text-text text-[8px] bg-navBackground justify-between max-[640px]:justify-center m-[4.1667vw] font-[600]">
      <div className="tracking-[2px] font-eurostile max-[640px]:hidden">
        F/S ©2026
      </div>

      <div className="flex items-baseline gap-2 max-[640px]:gap-3 max-[640px]:justify-center max-[640px]:text-center">
        <div className="font-[500] tracking-[0.3em] uppercase opacity-40 text-[length:clamp(7px,calc(100vw/var(--base-width)*7),calc(100vw/var(--base-width)*7))] max-[640px]:text-[16px]">
          integrity through expression™
        </div>
        <span className="hidden max-[640px]:inline text-[16px] opacity-40 font-eurostile">
          ©14/26
        </span>
      </div>

      <div className="uppercase font-eurostile font-[600] text-[8px] leading-[10px] tracking-[2px] line-through max-[640px]:hidden">
        Sound off
      </div>
    </footer>
  );
}
