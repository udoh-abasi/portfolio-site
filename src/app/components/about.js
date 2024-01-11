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

  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { amount: 0.5, once: true });

  return (
    <section
      id="about"
      className="p-4 mt-16 flex justify-center items-center scroll-mt-[100px]"
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
            I am a Fullstack Web Developer with over 3 years of experience,
            skilled in solving problems with Django, ReactJS, NextJS, NodeJS,
            etc.
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
            award in Tenece Professional Services Limited, twice (in 2021 and
            2022) because I approach problems as opportunities for learning and
            growth. I also display high-level proactiveness in providing
            solution to challenges and adding value to my team.
          </motion.p>

          <motion.p variants={aboutAnimation} className="mt-4">
            I am seeking a challenging and dynamic role in a highly innovative
            environment that will allow me to utilize my skills in creating
            robust and scalable web applications.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
