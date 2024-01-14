"use client";

import Image from "next/image";
import project1 from "../../../public/Project 1.webp";
import project2 from "../../../public/Project 2.webp";
import project3 from "../../../public/Project 3.webp";
import { FaGithub } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const Projects = () => {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, { amount: 0.5, once: true });

  const defaultAnimation = {
    hidden: { transform: "skew(35deg, 45deg)", opacity: 0 },
    visible: {
      transform: "skew(0deg, 0deg)",
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "backOut",
      },
    },
  };

  // Function to handle intersection changes. This will execute once the project carousel is in view
  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      // If the 'project' carousel is in view
      if (entry.isIntersecting) {
        observer.unobserve(entry.target); // Stop observing once animation is triggered

        // Wait 3 seconds before executing this, so that the animation in the parent will finish first
        setTimeout(() => {
          entry.target.classList.add("slide-right"); // Add the CSS class to trigger the animation

          // Remove the CSS class after 1 second
          setTimeout(() => {
            entry.target.classList.remove("slide-right");
          }, 1000);
        }, 3000);
      }
    });
  }, []);

  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.8,
    });

    // Target element to observe.
    // So, the <ul> that wraps my three carousel in the project section has the class '.slider.animated'. These are default classes added by 'react-responsive-carousel' library
    // I added the id '#projects', which is an id of the parent element, to make sure its the project's carousel that's animated
    const targetElement = document.querySelector("#projects .slider.animated");

    // Start observing the target element
    if (targetElement) {
      observer.observe(targetElement);
    }
  }, [handleIntersection]);

  return (
    <section
      id="projects"
      className="px-4 py-16 min-[650px]:flex justify-center items-center scroll-mt-[10px]"
    >
      <div className="flex-[0_1_650px] overflow-hidden" ref={projectRef}>
        <h1 className="text-[var(--special-text-color)] uppercase font-bold text-3xl text-center mb-4">
          Some of my best projects
        </h1>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={defaultAnimation}
        >
          <Carousel
            // autoPlay={true}
            // infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={true}
            animationHandler="slide"
            swipeScrollTolerance={5}
            showStatus={true}
            interval={5000}
            stopOnHover={true}
            centerMode={true}
            centerSlidePercentage={93}
            // centerSlidePercentage={88}
            className="projectCarousel"
          >
            <figure className="addShadowBg p-2">
              <Image
                src={project1}
                alt="Udohsplatform website"
                className="w-full mb-4"
              />

              <figcaption>
                <div className="min-[500px]:flex justify-between">
                  <Link
                    href="https://udohsplatform.udohabasi.com"
                    target="_blank"
                    rel="nofollow"
                    className="flex-[0_1_200px] mb-4 min-[500px]:mb-0 relative flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-[var(--special-text-color)]  transition duration-300 ease-out border-2 border-[var(--special-text-color)]  rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(var(--nav-bg-color))] duration-300 -translate-x-full bg-[var(--special-text-color)]  group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute font-bold flex items-center justify-center w-full h-full text-[var(--special-text-color)] transition-all duration-300 transform group-hover:translate-x-full ease">
                      View Live <IoDesktopOutline className="ml-2 text-2xl" />
                    </span>
                  </Link>

                  <Link
                    href="https://github.com/udoh-abasi/Udohs_Platform"
                    target="_blank"
                    rel="nofollow"
                    className="flex-[0_1_200px] relative flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-[var(--special-text-color)]  transition duration-300 ease-out border-2 border-[var(--special-text-color)]  rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(var(--nav-bg-color))] duration-300 -translate-x-full bg-[var(--special-text-color)]  group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute font-bold flex items-center justify-center w-full h-full text-[var(--special-text-color)] transition-all duration-300 transform group-hover:translate-x-full ease">
                      Github <FaGithub className="ml-2 text-2xl" />
                    </span>
                  </Link>
                </div>

                <p className="mt-2 text-justify p-3">
                  This is a Fullstack web app I called{" "}
                  <em className="text-[var(--special-text-color)] font-bold">
                    Udohs Platform.
                  </em>{" "}
                  It enables users write and share insightful thoughts as a blog
                  post. Readers can also visit and read inciting contents. They
                  can also like, and comment at will.
                </p>

                <div className="pt-4 flex text-left flex-col mb-4 min-[520px]:flex-row min-[520px]:mb-0 min-[520px]:gap-8 min-[520px]:items-center">
                  <h2 className="font-bold">Built with:</h2>
                  <p className="flex flex-wrap">
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      Django
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      React
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      PostgresQL
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      AWS EC2
                    </span>
                  </p>
                </div>
              </figcaption>
            </figure>

            <figure className="addShadowBg p-2">
              <Image
                src={project2}
                alt="Udohsclothing website"
                className="w-full mb-4"
              />

              <figcaption>
                <div className="min-[500px]:flex justify-between">
                  <Link
                    href="https://udohsclothing.vercel.app"
                    target="_blank"
                    rel="nofollow"
                    className="flex-[0_1_200px] mb-4 min-[500px]:mb-0 relative flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-[var(--special-text-color)]  transition duration-300 ease-out border-2 border-[var(--special-text-color)]  rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(var(--nav-bg-color))] duration-300 -translate-x-full bg-[var(--special-text-color)]  group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute font-bold flex items-center justify-center w-full h-full text-[var(--special-text-color)] transition-all duration-300 transform group-hover:translate-x-full ease">
                      View Live <IoDesktopOutline className="ml-2 text-2xl" />
                    </span>
                  </Link>

                  <Link
                    href="https://github.com/udoh-abasi/udohsclothingpublic"
                    target="_blank"
                    rel="nofollow"
                    className="flex-[0_1_200px] relative flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-[var(--special-text-color)]  transition duration-300 ease-out border-2 border-[var(--special-text-color)]  rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(var(--nav-bg-color))] duration-300 -translate-x-full bg-[var(--special-text-color)]  group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute font-bold flex items-center justify-center w-full h-full text-[var(--special-text-color)] transition-all duration-300 transform group-hover:translate-x-full ease">
                      Github <FaGithub className="ml-2 text-2xl" />
                    </span>
                  </Link>
                </div>

                <p className="mt-2 text-justify p-3">
                  This is an e-commerce web app I called{" "}
                  <em className="text-[var(--special-text-color)] font-bold">
                    Udohs Clothing.
                  </em>{" "}
                  Users can add items to cart and then proceed to check out
                  either as guest or through sign-up option.
                </p>

                <div className="pt-4 flex text-left flex-col mb-4 min-[520px]:flex-row min-[520px]:mb-0 min-[520px]:gap-8 min-[520px]:items-center">
                  <h2 className="font-bold">Built with:</h2>
                  <p className="flex flex-wrap">
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      NextJS
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      TailwindCSS
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      MongoDB
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      AWS Amplify
                    </span>
                  </p>
                </div>
              </figcaption>
            </figure>

            <figure className="addShadowBg p-2">
              <Image
                src={project3}
                alt="Udoh portfolio website"
                className="w-full mb-4"
              />

              <figcaption>
                <div className="min-[500px]:flex justify-between">
                  <Link
                    href="https://udohsabasi.com"
                    target="_blank"
                    rel="nofollow"
                    className="flex-[0_1_200px] mb-4 min-[500px]:mb-0 relative flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-[var(--special-text-color)]  transition duration-300 ease-out border-2 border-[var(--special-text-color)]  rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(var(--nav-bg-color))] duration-300 -translate-x-full bg-[var(--special-text-color)]  group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute font-bold flex items-center justify-center w-full h-full text-[var(--special-text-color)] transition-all duration-300 transform group-hover:translate-x-full ease">
                      View Live <IoDesktopOutline className="ml-2 text-2xl" />
                    </span>
                  </Link>

                  <Link
                    href="https://github.com/udoh-abasi/portfolio-site"
                    target="_blank"
                    rel="nofollow"
                    className="flex-[0_1_200px] relative flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-[var(--special-text-color)]  transition duration-300 ease-out border-2 border-[var(--special-text-color)]  rounded-full shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(var(--nav-bg-color))] duration-300 -translate-x-full bg-[var(--special-text-color)]  group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute font-bold flex items-center justify-center w-full h-full text-[var(--special-text-color)] transition-all duration-300 transform group-hover:translate-x-full ease">
                      Github <FaGithub className="ml-2 text-2xl" />
                    </span>
                  </Link>
                </div>

                <p className="mt-2 text-justify p-3">
                  This is my{" "}
                  <em className="text-[var(--special-text-color)] font-bold">
                    portfolio site
                  </em>{" "}
                </p>

                <div className="pt-4 flex text-left flex-col mb-4 min-[520px]:flex-row min-[520px]:mb-0 min-[520px]:gap-8 min-[520px]:items-center">
                  <h2 className="font-bold">Built with:</h2>
                  <p className="flex flex-wrap">
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      NextJS
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      TailwindCSS
                    </span>{" "}
                    <span className="block bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                      Framer Motion
                    </span>{" "}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
