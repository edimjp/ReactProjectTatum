import { useState } from "react";
import { NavLink } from "react-router";
import { motion, stagger, AnimatePresence, type Variants } from "motion/react";
import { navLinks } from "../utils/data";
import VideoCard from "../home/VideoCard";
import previewSrc from "../assets/videos/fiftyseven-cover.mp4";
import videoSrc from "../assets/videos/fiftyseven.mp4";

const ease: [number, number, number, number] = [0.06, 0, 0, 1];

const ulVariants: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 1,
      ease: ease,
      delayChildren: stagger(0.1),
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.5,
      ease: ease,
    },
  },
};

const linkVariants = {
  initial: {
    opacity: 0,
    y: 36.48,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: ease,
    },
  },
  exit: {
    opacity: 0,
    y: 36.48,
    transition: {
      ease: ease,
    },
  },
};

// const menuVariant = {};

const NavMenuDropDown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      {" "}
      <motion.button
        onMouseEnter={() => toggleMenu()}
        onMouseLeave={() => toggleMenu()}
        className="border-2 border-(--color-links) cursor-pointer rounded-md px-4 py-2"
      >
        Hover
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            variants={ulVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex absolute right-10 bg-(--color-panel) rounded-xs text-[13px] w-37.5"
          >
            <motion.ul className="group/li flex flex-col mx-6.25 my-4.5">
              {navLinks.map((navLink) => {
                const url =
                  navLink === "Sectors" ? "industries" : navLink.toLowerCase();
                return (
                  <motion.li
                    key={navLink}
                    className="group/link text-(--color-links) px-5 leading-[2.28] tracking-[.08em] font-light rounded-xs cursor-pointer hover:bg-(--color-hover) hover:pl-6 transition-all ease-in group-hover/li:opacity-50 hover:opacity-100!"
                  >
                    <motion.div variants={linkVariants}>
                      <NavLink
                        to={url === "home" ? `/` : `/${url}`}
                        className={({ isActive }) =>
                          isActive ? "hidden" : "relative flex items-start"
                        }
                      >
                        <span className="absolute -left-3.5 bottom-2.5 w-0.75 h-2 bg-[#f65600] rounded-xs hidden group-hover/link:block transition-all ease-in"></span>
                        <span>{navLink}</span>
                        {navLink === "Work" && (
                          <span className="text-[8px]">(13)</span>
                        )}
                      </NavLink>
                    </motion.div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <VideoCard
        previewSrc={previewSrc}
        videoSrc={videoSrc}
        duration="01:57"
        title="Our latest project"
      />
    </>
  );
};

export default NavMenuDropDown;
