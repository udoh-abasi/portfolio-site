import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAward, FaDownload, FaLaptopCode } from "react-icons/fa";
import { FaHandsHoldingCircle, FaSquarePhone } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";

const HeaderForBigScreen = () => {
  // This keeps track of the previous position that the user is
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  // This tracks if the user is scrolling up or down
  const [scrollDir, setScrollDir] = useState("up");

  // This useEffect adds an event listener to listen to scroll events
  useEffect(() => {
    // Check if the user is currently scrolling up or down
    const checkScroll = () => {
      if (window.scrollY < previousScrollPosition) {
        setScrollDir("up");
      } else {
        setScrollDir("down");
      }
    };

    window.addEventListener("scroll", () => {
      setPreviousScrollPosition(window.scrollY);
      checkScroll();
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {
        setPreviousScrollPosition(window.scrollY);
        checkScroll();
      });
    };
  }, [previousScrollPosition]);

  return (
    <ul
      id="smallScreenMenu"
      className={`${
        scrollDir === "up" ? "bottom-2" : "-bottom-48"
      } fixed left-0 flex justify-around items-center w-full text-[black] font-bold rounded-full overflow-hidden transition-all duration-700`}
    >
      <li className="hover:bg-[#e4cfde] rounded-3xl transition-all duration-700">
        <Link
          href="#about"
          className="p-2 flex justify-start items-center flex-col"
        >
          <RiContactsFill className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
          About
        </Link>
      </li>

      <li className="hover:bg-[#e4cfde] rounded-3xl transition-all duration-700">
        <Link
          href="#projects"
          className="p-2 flex justify-start items-center flex-col"
        >
          <FaLaptopCode className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
          Projects
        </Link>
      </li>

      <li className="hover:bg-[#e4cfde] rounded-3xl transition-all duration-700">
        <Link
          href="#skills"
          className="p-2 flex justify-start items-center flex-col"
        >
          <FaHandsHoldingCircle className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
          Skills
        </Link>
      </li>

      <li className="hover:bg-[#e4cfde] rounded-3xl transition-all duration-700">
        <Link
          href="#certifications"
          className="p-2 flex justify-start items-center flex-col"
        >
          <PiCertificateFill className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
          Certifications
        </Link>
      </li>

      <li className="hover:bg-[#e4cfde] rounded-3xl transition-all duration-700">
        <Link
          href="#awards"
          className="p-2 flex justify-start items-center flex-col"
        >
          <FaAward className="ml-2 mr-4 text-3xl min-[400px]:ml-4" /> Awards
        </Link>
      </li>

      <li className="hover:bg-[#e4cfde] rounded-3xl transition-all duration-700">
        <Link
          href="#contact"
          className="p-2 flex justify-start items-center flex-col"
        >
          <FaSquarePhone className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
          Contact
        </Link>
      </li>

      <li>
        <Link
          target="_blank"
          href="/Udoh Abasi - CV New.pdf"
          download="Udoh Abasi CV"
          className="w-full relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-700 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-white flex justify-center items-center font-bold">
            Download CV{" "}
            <FaDownload className="ml-2 mr-4 text-3xl min-[400px]:ml-4" />{" "}
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default HeaderForBigScreen;
