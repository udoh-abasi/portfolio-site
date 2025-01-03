"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const aboutAnimation = {
    hidden: {
      opacity: 0,
      transform: "translate(-70px, -50px)",
    },

    visible: {
      opacity: 1,
      transform: "translate(0px)",
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  // This useRef is attached to the element we want to watch if it entered the viewport
  const animationRef = useRef(null);

  // Watch when the about is in view. The 'amount' property is used to ensure at least half of the element is on the view port before the animation fires
  // The 'once' property is used to tell the animation to happen just one time, instead of refiring anytime the element enters the viewport
  const isInView = useInView(animationRef, { amount: 0.5, once: true });

  return (
    <section
      id="about"
      className="p-4 py-16 flex justify-center items-center scroll-mt-[10px]"
    >
      <div className="text-justify max-w-[650px]">
        <h1 className="text-[var(--special-text-color)] uppercase font-bold text-3xl text-center mb-4">
          About me
        </h1>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.5 }}
          ref={animationRef}
        >
          <motion.p variants={aboutAnimation}>
            I am a results-driven Fullstack Software Engineer with 4+ years of
            experience and expertise in planning, designing, and implementing
            high-quality web apps. I have demonstrated expertise in reducing
            page load times by 50%, implementing RESTful APIs, and driving user
            engagement through optimized web solutions.
          </motion.p>

          <motion.p variants={aboutAnimation} className="mt-4">
            I have proven ability to quickly understand requirements and create
            innovative solutions using modern frameworks like React, Django,
            NextJS, NodeJS, TailwindCSS, Radix UI, etc.
          </motion.p>

          <motion.p variants={aboutAnimation} className="my-4">
            In 2019, I graduated with a{" "}
            <strong className="text-[var(--special-text-color)]">
              first class degree
            </strong>{" "}
            from a prestigious university in Nigeria.
          </motion.p>

          <motion.p variants={aboutAnimation}>
            I proudly won the
            <strong className="text-[var(--special-text-color)]">
              {" "}
              Employee of the Year{" "}
            </strong>
            award in Tenece Professional Services Limited, thrice (in 2024, 2022
            and 2021) because I approach problems as opportunities for learning
            and growth. I also display high-level proactiveness in providing
            solution to challenges and adding value to my team.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
