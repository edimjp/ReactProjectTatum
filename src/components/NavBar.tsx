import { useState, useEffect } from "react";
import NavMenuDropDown from "./NavMenuDropDown.tsx";
import fiftyseven from "../../src/assets/icons/fiftysevn.svg";
import HamburgerMenu from "./HamburgerMenu.tsx";
const TIME_ZONE = "Africa/Lagos";

function getTimeParts() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  return {
    hour,
    minute,
    label: `${String(hour).padStart(2, "0")}: ${String(minute).padStart(2, "0")}`,
  };
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(getTimeParts);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setCurrentTime(getTimeParts()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const getHour = (currentTime.hour % 12) * 30 + currentTime.minute * 0.5;
  const getMinutes = currentTime.minute * 6;

  return (
    <header className="m-[4.1667vw]">
      <nav>
        <div className="flex justify-between">
          <div className="flex w-full sm:w-[455px] justify-between items-center bg-navBackground py-[15px] px-[18px]">
            <img
              src={fiftyseven}
              alt="fiftyseven"
              className="max-h-[10px] max-w-[129px]"
            />

            <div className="relative flex items-center">
              <div
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <HamburgerMenu
                  open={open}
                  onClick={() => setOpen((prev) => !prev)}
                />

                <NavMenuDropDown isMenuOpen={isMenuOpen} />
              </div>
            </div>
          </div>

          <div className=" hidden sm:flex text-text gap-2 items-center">
            <div className="flex items-center gap-px text-text text-[10px] tracking-[3px]">
              <span className="leading-none">[</span>
              <span className="inline-block h-[3px] w-[3px] rounded-full bg-[#00ef5f]"></span>
              <span className="leading-none">]</span>
            </div>
            <p className="font-eurostile font-[100] text-[8px] tracking-[2px]">
              OPEN
            </p>
            <p>—</p>
            <p className="font-[700] text-[9px] tracking-[2px]">
              {currentTime.label}
            </p>

            <div className="relative rounded-full border-white/70 bg-navBackground w-[23px] h-[23px]">
              <div
                className="absolute bottom-1/2 left-1/2 h-[5px] w-px bg-text"
                style={{
                  transformOrigin: "bottom center",
                  transform: `translateX(-50%) rotate(${getHour}deg)`,
                }}
              ></div>

              <div
                className="absolute bottom-1/2 left-1/2 h-[8px] w-px bg-text"
                style={{
                  transformOrigin: "bottom center",
                  transform: `translateX(-50%) rotate(${getMinutes}deg)`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
