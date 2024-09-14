import headerLogo from "../assets/images/header-logo.svg";
import hamBurger from "../assets/icons/hamburger.svg";
import crossIcon from "../assets/icons/cross_icon.svg";
import darkIcon from "../assets/icons/dark-mode.png";
import { navLinks } from "../constants/index.js";
import { useState } from "react";

const Nav = ({ darkMode, setDarkMode }) => {
  const [hamIcon, setHamIcon] = useState(hamBurger);
  const darkHandler = () => (darkMode ? setDarkMode(false) : setDarkMode(true));
  const clickHandler = () => {
    hamIcon === hamBurger ? setHamIcon(crossIcon) : setHamIcon(hamBurger);
  };
  return (
    <header className="padding-x py-8 fixed z-10  w-full transition-all bg-pale-blue ">
      <nav className="max-w-[1440px] m-auto flex gap-4 justify-around items-center">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={120} height={50} />
        </a>

        <ul
          className={` flex gap-4 lg:gap-8 max-sm:fixed  max-sm:p-8  transition-all
           max-sm:top-24 max-sm:flex-col max-sm:w-9/12 max-sm:h-full max-sm:bg-coral-red
              ${
                hamIcon === hamBurger ? "max-sm:-right-full" : "max-sm:right-0"
              } 
        `}
        >
          {navLinks.map((ele) => (
            <a href={ele.href} key={ele.label}>
              <li className="font-montserrat leading-normal text-lg text-slate-gray hover:border-b-2 border-black max-sm:text-black">
                {ele.label}
              </li>
            </a>
          ))}
        </ul>
        <div onClick={darkHandler}>
          <img src={darkIcon} alt="darkmode icon" width={40} height={40} />
        </div>
        <div className="sm:hidden cursor-pointer" onClick={clickHandler}>
          <img src={hamIcon} alt="Menu" width={40} height={70} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
