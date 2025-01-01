"use client";

import Link from "next/link";
import Image from "next/image";
import profilePic from "../../../public/profilePicture-no-bg-small.webp";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";
import { IoCaretDown } from "react-icons/io5";
import { motion } from "framer-motion";
import { useMatchMedia } from "../utils/useMatchMedia";

const LandingUI = () => {
  // This controls if the copy button is clicked or not
  const [copied, setCopied] = useState(false);

  // This useEffect makes sure the copy button is shown again after 5 seconds
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  // This is the variant used to animate my name (Udoh Abasi)
  const nameAnimation = {
    hidden: {
      opacity: 0,
      transform: "perspective(500px) rotateX(-75deg) translateY(70px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },

    visible: {
      opacity: 1,
      transform: "perspective(500px) rotateX(0) translateY(0px)",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // This useEffect animates the text that says 'I code cool website'
  // It makes it scroll up and disappear quickly
  useEffect(() => {
    // First we get the element that says 'I code cool websites'
    const theEle = document.querySelector("#theEle");

    // Run the function first, on page load
    theEle.style.bottom = `${window.scrollY * 3}px`;
    theEle.style.opacity = Math.max(
      1 - window.scrollY / (window.innerHeight * 0.2),
      0
    );

    // We listen to when the entire window is scrolled
    window.addEventListener("scroll", () => {
      // Here, since the element is positioned 'fixed', we move the property 'bottom' to be 3 times the value of the screen Y position
      theEle.style.bottom = `${window.scrollY * 3}px`;

      // This will ensure the element slowly fades out as the user scrolls up, and slowly fades in as the user scrolls down
      theEle.style.opacity = Math.max(
        1 - window.scrollY / (window.innerHeight * 0.2),
        0
      );
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {
        theEle.style.bottom = `${window.scrollY * 3}px`;
        theEle.style.opacity = Math.max(
          1 - window.scrollY / (window.innerHeight * 0.2),
          0
        );
      });
    };
  }, []);

  // Since on big screens, we do not want the text that says 'I code cool websites' to be at the bottom (0px), so that the navigation bar will not cover it, we use this to check when we are on big screens.
  const bigScreen = useMatchMedia("(min-width:776px)");

  // This useEffect ensures that the navigation bar on big screens does not cover the text that says 'I code cool websites'
  useEffect(() => {
    // First we get the element that says 'I code cool websites'
    const theEle = document.querySelector("#theEle");

    // Run the function first, on page load
    if (bigScreen === true && window.scrollY < 15) {
      theEle.style.bottom = "64px";
    }

    window.addEventListener("scroll", () => {
      // So, if 'window.scrollY < 15', that means we are 15px close to the top of the page, so we move the element '64px' up, from the bottom, by setting 'bottom: 64px'
      if (bigScreen === true && window.scrollY < 15) {
        theEle.style.bottom = "64px";
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", () => {
        if (bigScreen === true && window.scrollY < 15) {
          theEle.style.bottom = "64px";
        }
      });
    };
  }, [bigScreen]);

  return (
    <section className="p-4 pt-24 min-[776px]:pt-16 min-h-screen max-h-screen overflow-hidden">
      <div className="flex min-[800px]:justify-around max-[620px]:justify-center items-center max-[620px]:flex-col">
        <div className="min-[621px]:flex-[0_0_380px] relative z-[1]">
          <p className="font-bold text-2xl">
            Hello{" "}
            <span className="text-[var(--special-text-color)]">World!</span>
          </p>

          <p className="font-bold text-2xl my-6">
            I am{" "}
            <span className="uppercase text-[var(--special-text-color)] text-[min(10vw,_50px)]">
              <span className="sr-only">Udoh Abasi</span>
              <motion.span
                id="lying-text-container"
                initial="hidden"
                animate="visible"
                transition={{
                  staggerChildren: 0.5,
                }}
                className="inline-block"
                aria-hidden
              >
                {"Udoh Abasi".split("").map((eachCharacter, i) => {
                  if (eachCharacter == " ") {
                    return <motion.span key={i}>&nbsp;</motion.span>;
                  } else {
                    return (
                      <motion.span
                        variants={nameAnimation}
                        key={i}
                        className="inline-block"
                      >
                        {eachCharacter}
                      </motion.span>
                    );
                  }
                })}
              </motion.span>
            </span>
          </p>

          <p className="font-bold text-[min(6.5vw,_30px)]">
            <span className="text-[var(--special-text-color)]">Fullstack</span>{" "}
            Engineer
          </p>

          <article className="flex gap-6 mt-8">
            <div className="relative group">
              <button
                type="button"
                // href=""
                // scroll={false}
                aria-label="Email"
                title="Email"
                className="text-3xl min-[350px]:text-4xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8 peer"
                onClick={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailUI").focus();
                }}
                onTouchStart={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailUI").focus();
                }}
                onMouseEnter={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailUI").focus();
                }}
              >
                <MdMarkEmailUnread />
              </button>

              <div
                id="popUpEmailAndPhoneNumber"
                className="popUpEmailUI absolute -top-9 -left-2 bg-white gap-4 p-1 rounded-2xl hidden hover:flex focus:flex group-focus-within:flex focus-within:flex group-focus:flex peer-focus:flex peer-focus-within:flex group-hover:flex peer-hover:flex"
              >
                <Link
                  href="mailto:udoh.aba@gmail.com"
                  target="_blank"
                  className="underline text-blue-400"
                >
                  udohabasi.dev@gmail.com
                </Link>

                <div className="bg-gray-700 rounded-xl inline text-[#70dbb8] font-bold">
                  {!copied ? (
                    <button
                      type="button"
                      aria-label="Copy"
                      title="Copy"
                      onClick={async () => {
                        // When the button is clicked, copy the text to the clipboard
                        await navigator.clipboard.writeText(
                          "udohabasi.dev@gmail.com"
                        );
                        setCopied(true);
                      }}
                    >
                      <BiCopy className="inline text-2xl p-[0.2rem]" />
                    </button>
                  ) : (
                    <p className="inline" aria-label="Copied" title="Copied">
                      <BiCheck className="inline text-green-400 text-2xl" />
                    </p>
                  )}
                </div>

                <IoCaretDown className="text-white absolute top-6 left-2 text-2xl" />
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                // href=""
                // scroll={false}
                aria-label="Call"
                title="Call"
                className="text-3xl min-[350px]:text-4xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8 peer"
                onClick={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpPhoneUI").focus();
                }}
                onTouchStart={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailUI").focus();
                }}
                onMouseEnter={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailUI").focus();
                }}
              >
                <FaSquarePhone />
              </button>

              <div
                id="popUpEmailAndPhoneNumber"
                className="popUpPhoneUI absolute -top-9 -left-10 bg-white gap-4 p-1 rounded-2xl hidden hover:flex focus:flex group-focus-within:flex focus-within:flex group-focus:flex peer-focus:flex peer-focus-within:flex group-hover:flex peer-hover:flex"
              >
                <Link
                  href="tel:+2348142622350"
                  target="_blank"
                  className="underline text-blue-400"
                >
                  +2348142622350
                </Link>

                <div className="bg-gray-700 rounded-xl inline text-[#70dbb8] font-bold">
                  {!copied ? (
                    <button
                      type="button"
                      aria-label="Copy"
                      title="Copy"
                      onClick={async () => {
                        // When the button is clicked, copy the text to the clipboard
                        await navigator.clipboard.writeText("+2348142622350");
                        setCopied(true);
                      }}
                    >
                      <BiCopy className="inline text-2xl p-[0.2rem]" />
                    </button>
                  ) : (
                    <p className="inline" aria-label="Copied" title="Copied">
                      <BiCheck className="inline text-green-400 text-2xl" />
                    </p>
                  )}
                </div>

                <IoCaretDown className="text-white absolute top-6 left-11 text-2xl" />
              </div>
            </div>

            <Link
              href="https://www.linkedin.com/in/abasi-ono-udoh-69564420b"
              target="_blank"
              rel="nofollow"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="text-3xl min-[350px]:text-4xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://github.com/udoh-abasi"
              target="_blank"
              rel="nofollow"
              aria-label="Github Profile"
              title="Github"
              className="text-3xl min-[350px]:text-4xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8"
            >
              <FaGithub />
            </Link>

            <Link
              id="twitterContact"
              href="https://twitter.com/tropyganty0"
              target="_blank"
              rel="nofollow"
              aria-label="Twitter X Profile"
              title="X"
              className="text-3xl min-[350px]:text-4xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8"
            >
              <FaXTwitter />
            </Link>
          </article>
        </div>

        <div className="grid min-[430px]:-mt-11 min-[590px]:-mt-20 min-[620px]:flex-[0_0_400px] min-[620px]:relative min-[620px]:left-[-45px] min-[750px]:left-0 top-7">
          <span
            id="imageBg"
            className="block bg-[rgb(var(--nav-bg-color))] w-full h-[250px] col-start-1 row-start-1 self-end rounded-t-3xl"
          ></span>
          <Image
            src={profilePic}
            alt="Udoh Abasi"
            priority
            className="w-full col-start-1 row-start-1"
          />
        </div>
      </div>

      <p
        id="theEle"
        className={`fixed bottom-4 min-[776px]:bottom-16 text-center text-[min(9vw,_50px)] font-bold w-full max-[620px]:hidden`}
        style={{ opacity: 1 }}
      >
        I code cool{" "}
        <span className="text-[var(--special-text-color)] drop-shadow-[1px_1px_black]">
          websites.
        </span>
      </p>
    </section>
  );
};

export default LandingUI;
