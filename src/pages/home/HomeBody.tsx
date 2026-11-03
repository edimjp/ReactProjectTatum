import { useState } from "react"; // no longer needed, see the CTA change below
import { easeInOut, motion } from "motion/react";
import VideoCard from "../home/VideoCard";
import previewSrc from "../../assets/videos/fiftyseven-cover.mp4";
import videoSrc from "../../assets/videos/fiftysevenmodal.mp4";

const parentVariants = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: 1,
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const textVariants = {
  initial: { y: 12, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: easeInOut } },
};

const spanVariants = textVariants;

const HomeBody = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:mx-[4.1667vw] lg:px-0">
      <motion.div
        variants={parentVariants}
        initial="initial"
        animate="animate"
        className="mx-auto my-8 flex max-w-full flex-col items-center justify-center gap-3 text-white sm:my-10 md:mx-16 lg:my-12"
      >
        <motion.div
          variants={textVariants}
          className="font-['Eurostile_Next_LT_Pro_Light_Ext',sans-serif] text-[10px] font-light uppercase tracking-[0.1em] sm:scale-x-125"
        >
          est. &middot; 2016
        </motion.div>

        <motion.div
          variants={textVariants}
          className="text-center font-['Bahnschrift_Light'] text-5xl font-thin leading-[1.05] sm:scale-x-125 sm:text-7xl lg:text-8xl"
        >
          <motion.span variants={spanVariants}>Boutique</motion.span>
          <br />
          <motion.span variants={spanVariants}>studio.</motion.span>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="max-w-[22rem] text-center text-[11px] leading-relaxed tracking-[0.12em] text-white/80 sm:max-w-none sm:text-[10px] sm:tracking-[0.2em]"
        >
          HIGH-FIDELITY BRANDING & DESIGN FOR BIOTECH.
          <br className="hidden sm:block" /> CLIMATE TECH. DEEP TECH & THE
          COMPANIES
          <br className="hidden sm:block" /> DEFINING WHAT COMES NEXT
        </motion.div>

        <motion.a
          variants={textVariants}
          href="#"
          className="group mt-4 flex items-baseline gap-[5px] bg-[#312F32] px-5 py-3 uppercase tracking-[0.05em] sm:px-4 sm:py-2"
        >
          <div className="text-xs font-bold uppercase transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 group-active:translate-x-2">
            Our Work
          </div>
          <div className="h-2 w-1 bg-[#F75703] transition-transform duration-300 group-hover:-translate-x-[77px] group-focus-visible:-translate-x-[77px] group-active:-translate-x-[77px]" />
        </motion.a>
      </motion.div>

      <VideoCard
        previewSrc={previewSrc}
        videoSrc={videoSrc}
        duration="01:57"
        title="Our latest project"
      />
    </div>
  );
};

export default HomeBody;
