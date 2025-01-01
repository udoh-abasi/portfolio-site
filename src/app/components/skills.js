"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const skillsAnimation = {
    hidden: {
      scale: 0,
    },

    visible: {
      scale: 1,
      transition: {
        duration: 0.9,
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
      id="skills"
      className="px-4 py-16 flex justify-center items-center scroll-mt-[10px]"
    >
      <div className="flex-[0_1_650px]">
        <h1 className="text-[var(--special-text-color)] uppercase font-bold text-3xl text-center mb-4">
          Skills and tools I use daily
        </h1>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.5 }}
          ref={animationRef}
        >
          <motion.div variants={skillsAnimation} className="pt-4 mb-4">
            <h2 className="font-bold uppercase mb-2 text-xl">
              Backend development
            </h2>
            <div className="flex flex-wrap">
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Django
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Django Rest Framework (DRF)
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                NodeJS
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                ExpressJS
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                NextJS
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Python
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Celery & Redis
              </p>
            </div>
          </motion.div>

          <motion.div variants={skillsAnimation} className="pt-4 mb-4">
            <h2 className="font-bold uppercase mb-2 text-xl">
              Frontend development
            </h2>
            <div className="flex flex-wrap">
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Typescript
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                ReactJS
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                NextJS
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                TailwindCSS
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Radix UI
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Redux Toolkit
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                JavaScript
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                HTML/CSS
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Responsive Design
              </p>
            </div>
          </motion.div>

          <motion.div variants={skillsAnimation} className="pt-4 mb-4">
            <h2 className="font-bold uppercase mb-2 text-xl">
              Database management
            </h2>
            <div className="flex flex-wrap">
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                PostgresQL
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                MongoDB
              </p>
            </div>
          </motion.div>

          <motion.div variants={skillsAnimation} className="pt-4 mb-4">
            <h2 className="font-bold uppercase mb-2 text-xl">Others</h2>
            <div className="flex flex-wrap">
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Git & GitHub
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Visual Studio Code
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                AWS EC2
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                AWS Amplify
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                S3 Bucket
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Communication Skills
              </p>
              <p className="bg-[rgb(var(--foreground-rgb))] text-[rgb(var(--nav-bg-color))] py-1 px-2 rounded-2xl border-2 border-[rgb(var(--nav-bg-color))]">
                Continuous Learning
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
