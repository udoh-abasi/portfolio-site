"use client";

import { useEffect, useState } from "react";
import { useMatchMedia } from "../utils/useMatchMedia";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { BiSolidSun } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { FaLaptopCode, FaAward } from "react-icons/fa";
import {
  FaHandsHoldingCircle,
  FaSquarePhone,
  FaDownload,
} from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import HeaderForBigScreen from "./headerForBigScreen";

const Header = () => {
  const smallScreenNav = useMatchMedia("(max-width:776px)");

  // This useState controls which button is shown at a particular time. (So, if user is on dark mode, show the 'light mode' button and vice versa). By default, we assume the user is on light mode
  const [colorModeIsDark, setColorModeIsDark] = useState(false);

  // Checks when the menu for small screen is open or closed
  const [smallScreenMenuIsOpen, setSmallScreenMenuIsOpen] = useState(false);

  // This is used to add the 'hidden' or 'flex' tailwind property to the nav
  const [hideSmallScreenNav, setHideSmallScreenNav] = useState(true);

  // NOTE: Set this up in a useEffect, since NextJS doesn't allow calling 'window' without wrapping it in a useEffect
  // NOTE: This useEffect adds an event listener incase the user manually changes system color mode preference (from dark to light, OR from light to dark), then it update the meta 'color-scheme' accordingly
  useEffect(() => {
    // Then we define what the dark-mode should match
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    // Then set the color mode so the light-mode/dark-mode buttons will update accordingly
    setColorModeIsDark(darkMode.matches);

    // Here, we select '<meta name="color-scheme" content="light dark" />' from the <head>
    const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');

    // Add an event listener incase user changes their color preference
    darkMode.addEventListener("change", (e) => {
      if (e.matches) {
        //Set colorscheme to dark
        colorSchemeMeta.setAttribute("content", "dark");
        // Update the button on the page to show 'Light mode' button
        setColorModeIsDark(true);

        // Remove the classes from the body if already added
        const theBody = document.body;
        theBody.classList.remove("light");
        theBody.classList.remove("dark");
      } else {
        colorSchemeMeta.setAttribute("content", "light");
        setColorModeIsDark(false);

        const theBody = document.body;
        theBody.classList.remove("light");
        theBody.classList.remove("dark");
      }
    });

    // Cleanup
    return () => {
      darkMode.removeEventListener("change", (e) => {
        if (e.matches) {
          //Set colorscheme to dark
          colorSchemeMeta.setAttribute("content", "dark");
          // Update the button on the page to show 'Light mode' button
          setColorModeIsDark(true);

          // Remove the classes from the body if already added
          const theBody = document.body;
          theBody.classList.remove("light");
          theBody.classList.remove("dark");
        } else {
          colorSchemeMeta.setAttribute("content", "light");
          setColorModeIsDark(false);

          const theBody = document.body;
          theBody.classList.remove("light");
          theBody.classList.remove("dark");
        }
      });
    };
  }, []);

  // Default variant used to style the navigation menu for small screen
  const defaultVariant = {
    hidden: {
      opacity: 0,
      transform: "translate(-36px, -36px)",
    },

    visible: {
      opacity: 1,
      transform: "translate(0, 0)",
    },
  };

  // This function runs to show the menu bar on small screen
  const appearSmallScreenNav = () => {
    // This will remove 'hidden' and add the 'flex' tailwind property to the <ul> wrapping the menu items
    setHideSmallScreenNav(false);

    // Make sure the <body> is not scrollable while the menu items are open
    document.body.classList.add("overflow-hidden");

    // Wait for some second so that the settings above will kick in, before starting the animation
    setTimeout(() => {
      // This will start the animation
      setSmallScreenMenuIsOpen(true);
    }, 0.5);
  };

  // This function runs to hide the menu bar on small screen
  const disappearSmallScreenNav = () => {
    setSmallScreenMenuIsOpen(false);

    setTimeout(() => {
      setHideSmallScreenNav(true);
      document.body.classList.remove("overflow-hidden");
    }, 800);
  };

  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center bg-[rgba(var(--nav-bg-color))] p-4 fixed w-full top-0 left-0 z-10">
          <li>
            <Link
              href="/"
              title="home"
              className="font-bold tracking-[-0.12em] text-2xl min-[776px]:text-3xl"
              id="logo"
            >
              udohabasi
            </Link>
          </li>

          <Link
            href="#twitterContact"
            className="absolute left-[150px] bottom-0 font-bold border border-r-emerald-700 bg-emerald-700 box rounded-md p-1 text-xs opacity-0 w-0 overflow-hidden h-0 focus:opacity-100 focus:w-auto focus:h-auto"
          >
            Skip Navigation
          </Link>

          <li>
            <button
              type="button"
              aria-label="Toggle between light and dark mode"
              className="block"
              onClick={() => {
                const theBody = document.body;
                const colorSchemeMeta = document.querySelector(
                  'meta[name="color-scheme"]'
                );

                if (colorModeIsDark) {
                  theBody.classList.remove("dark");
                  theBody.classList.add("light");

                  colorSchemeMeta.setAttribute("content", "light");
                } else {
                  theBody.classList.remove("light");
                  theBody.classList.add("dark");

                  colorSchemeMeta.setAttribute("content", "dark");
                }

                setColorModeIsDark(!colorModeIsDark);
              }}
            >
              <span className="w-[80px] h-[30px] min-[776px]:w-[110px] min-[776px]:h-[40px] rounded-3xl block overflow-hidden">
                <span
                  className={`block transition-all duration-300 ease-linear ${
                    colorModeIsDark ? "translate-y-[-50%]" : "translate-y-[0%]"
                  }`}
                >
                  <span className="w-[80px] h-[30px] min-[776px]:w-[110px] min-[776px]:h-[40px] inline-flex justify-between p-1 items-center flex-row-reverse bg-black rounded-3xl">
                    <span className="w-[20px] h-[20px] min-[776px]:w-[30px] min-[776px]:h-[30px] bg-white rounded-full inline-flex justify-center items-center">
                      <BsMoonStars />
                    </span>

                    <span className="text-white text-[0.5rem] min-[776px]:text-[0.67rem] font-bold uppercase">
                      Dark Mode
                    </span>
                  </span>

                  <span className="w-[80px] h-[30px] min-[776px]:w-[110px] min-[776px]:h-[40px] inline-flex justify-between p-1 items-center bg-slate-200 rounded-3xl">
                    <span className="w-[20px] h-[20px] min-[776px]:w-[30px] min-[776px]:h-[30px] bg-white rounded-full inline-flex justify-center items-center">
                      <BiSolidSun className="text-black" />
                    </span>

                    <span className="text-black text-[0.5rem] min-[776px]:text-[0.67rem] font-bold uppercase">
                      Light Mode
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </li>

          {smallScreenNav && (
            <li>
              <button
                aria-label="Open menu"
                type="button"
                title="Open menu"
                className="text-4xl text-[var(--special-text-color)] cursor-pointer"
                onClick={appearSmallScreenNav}
              >
                <GiHamburgerMenu />
              </button>

              <motion.ul
                id="smallScreenMenu"
                className={`${
                  hideSmallScreenNav ? "hidden" : "flex"
                } fixed top-0 left-0 w-full h-full flex-col items-center gap-4 text-[#714693] text-xl font-bold p-4 overflow-auto`}
                // Making the 'initial' value to be the opposite of the 'animate' value made the elements animate in and out
                initial={smallScreenMenuIsOpen ? "hidden" : "visible"}
                animate={smallScreenMenuIsOpen ? "visible" : "hidden"}
                // Ensures one child <li> waits for the <li> above it to finish animating before starting his own
                transition={{
                  staggerChildren: 0.1,
                }}
              >
                <motion.li
                  className="w-full text-center mt-20 bg-[#e4cfde] rounded-full max-w-[400px]"
                  variants={defaultVariant}
                  onClick={disappearSmallScreenNav}
                >
                  <Link
                    href="#about"
                    className="p-2 flex justify-start items-center"
                  >
                    <RiContactsFill className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
                    About
                  </Link>
                </motion.li>

                <motion.li
                  className="w-full text-center bg-[#e4cfde] rounded-full max-w-[400px]"
                  variants={defaultVariant}
                >
                  <Link
                    href="#projects"
                    className="p-2 flex justify-start items-center"
                    onClick={disappearSmallScreenNav}
                  >
                    <FaLaptopCode className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
                    Projects
                  </Link>
                </motion.li>

                <motion.li
                  variants={defaultVariant}
                  className="w-full text-center bg-[#e4cfde] rounded-full max-w-[400px]"
                  onClick={disappearSmallScreenNav}
                >
                  <Link
                    href="#skills"
                    className="p-2 flex justify-start items-center"
                  >
                    <FaHandsHoldingCircle className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
                    Skills
                  </Link>
                </motion.li>

                <motion.li
                  variants={defaultVariant}
                  className="w-full text-center bg-[#e4cfde] rounded-full max-w-[400px]"
                  onClick={disappearSmallScreenNav}
                >
                  <Link
                    href="#certifications"
                    className="p-2 flex justify-start items-center"
                  >
                    <PiCertificateFill className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
                    Certifications
                  </Link>
                </motion.li>

                <motion.li
                  variants={defaultVariant}
                  className="w-full text-center bg-[#e4cfde] rounded-full max-w-[400px]"
                  onClick={disappearSmallScreenNav}
                >
                  <Link
                    href="#awards"
                    className="p-2 flex justify-start items-center"
                  >
                    <FaAward className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
                    Awards
                  </Link>
                </motion.li>

                <motion.li
                  variants={defaultVariant}
                  className="w-full text-center bg-[#e4cfde] rounded-full max-w-[400px]"
                  onClick={disappearSmallScreenNav}
                >
                  <Link
                    href="#contact"
                    className="p-2 flex justify-start items-center"
                    onClick={disappearSmallScreenNav}
                  >
                    <FaSquarePhone className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
                    Contact
                  </Link>
                </motion.li>

                <motion.li
                  variants={defaultVariant}
                  className="w-full max-w-[400px] mt-8"
                  onClick={disappearSmallScreenNav}
                >
                  <Link
                    target="_blank"
                    href="/Udoh Abasi - CV New.pdf"
                    download="Udoh Abasi CV"
                    className="w-full relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white flex justify-center items-center font-bold">
                      Download CV{" "}
                      <FaDownload className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
                    </span>
                  </Link>
                </motion.li>

                <li className="absolute top-5 right-5">
                  <button
                    aria-label="Close menu"
                    title="Close menu"
                    type="button"
                    className="text-4xl text-white cursor-pointer"
                    onClick={disappearSmallScreenNav}
                  >
                    <AiOutlineClose />
                  </button>
                </li>
              </motion.ul>
            </li>
          )}

          {!smallScreenNav && <HeaderForBigScreen />}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
