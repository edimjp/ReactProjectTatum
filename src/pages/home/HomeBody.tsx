import { useState } from "react";

const HomeBody = () => {
  const [mouseOver, setMouseOver] = useState(false);
  //   const mouseEvent = mouseOver ? "bg-[#F75703]" : "bg-[#312F32]";
  return (
    <div className="h-screen border border-red-600 flex flex-col bg-gray-900 gap-3 text-white justify-center items-center mx-16 my-8">
      <div className="tracking-[0.1em] font-['Eurostile_Next_LT_Pro_Light_Ext', sans-serif] scale-x-125 uppercase font-light text-[10px]">
        est. &middot; 2016
      </div>
      <div className="scale-x-125 font-['Bahnschrift_Light'] font-thin text-center text-8xl">
        Boutique
        <br />
        studio.
      </div>
      <div className="text-[10px] tracking-[0.2em] text-white/80 text-center">
        HIGH-FIDELITY BRANDING & DESIGN FOR BIOTECH.
        <br />
        CLIMATE TECH. DEEP TECH & THE COMPANIES
        <br />
        DEFINING WHAT COMES NEXT
      </div>
      <a
        href="#"
        onMouseEnter={() => setMouseOver(!mouseOver)}
        onMouseLeave={() => setMouseOver(!mouseOver)}
        className="flex mt-4 items-baseline px-4 gap-[5px] bg-[#312F32] py-2 tracking-[0.05em] uppercase"
      >
        <div
          className={`font-bold text-xs uppercase transition-transform duration-300 ${
            mouseOver ? "translate-x-2" : "translate-x-0"
          }`}
        >
          Our Work
        </div>

        <div
          className={`h-2 w-1 bg-[#F75703] transition-all duration-300 ${
            mouseOver ? "translate-x-[-77px] h-2" : "translate-x-0 h-2"
          }`}
        ></div>
      </a>
    </div>
  );
};

export default HomeBody;
