import { Link } from "react-router";
import { navLinks } from "../utils/data";

const NavMenuDropDown = () => {
  return (
    <nav className="flex absolute right-10">
      <ul className="flex flex-col bg-(--color-panel) text-(--color-links) rounded-xs px-6.25 py-4.5 text-[13px]">
        {navLinks.map((navLink) => {
          const url =
            navLink === "Sectors" ? "industries" : navLink.toLowerCase();
          return (
            <li
              key={navLink}
              className="group px-5 leading-[2.28] tracking-[.08em] font-light rounded-xs bg-(--color-panel) cursor-pointer hover:bg-(--color-hover) hover:pl-6"
            >
              <Link to={`/${url}`} className="relative">
                <span className="absolute -left-4 bottom-0.5 w-0.5 h-2 bg-[#f65600] rounded-xs hidden group-hover:block"></span>
                {navLink}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenuDropDown;
