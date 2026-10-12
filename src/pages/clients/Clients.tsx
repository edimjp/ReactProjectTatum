// import { motion } from "motion/react";
// import clients from "../../utils/clients";
import image from "../../assets/images/manuel_inauen.jpg";

const Clients = () => {
  return (
    <div className="w-9/10 flex flex-col m-auto bg-gray-600 gap-10">
      <div className="relative">
        <div className="absolute bottom-16 flex justify-between items-center px-3 w-full border-l-2 border-white border-r-2 h-10">
          <p>N&deg;</p>
          <h1 className="uppercase text-5xl text-center underline max-[640px]:max-w-50 min-[640px]:whitespace-nowrap leading-[1.16]">
            MANUEL INUEN
          </h1>
          <div className="rounded-full border-2 border-white size-5 text-sm flex justify-center items-center">
            1
          </div>
        </div>
        <img src={image} alt="Manuel Inauen" className="w-7/10 h-auto m-auto" />
        <div className="absolute bg-[#f65600] w-0.75 h-6 rotate-30 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="underline uppercase text-center font-semibold leading-[.1em] text-2xl ">
          KOLLABO AG
        </h3>
        <h3 className="underline uppercase text-center font-semibold leading-[.1em] text-2xl ">
          COFOUNDER & CEO
        </h3>
        <p className="underline uppercase text-center">#HR DIGITAL PLATFORM</p>
      </div>
    </div>
  );
};

export default Clients;
