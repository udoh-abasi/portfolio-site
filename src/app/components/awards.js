"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import award1 from "../../../public/Award 2023-small.webp";
import award2 from "../../../public/Award 2022 Employee of the year-small.webp";
import award3 from "../../../public/Award 2022 Unsung Hero-small.webp";
import award4 from "../../../public/Award 2021-small.webp";
import award5 from "../../../public/Award 2020-small.webp";

const Awards = () => {
  return (
    <section
      id="awards"
      className="px-4 py-16 min-[650px]:flex justify-center items-center scroll-mt-[10px]"
    >
      <div className="flex-[0_1_650px] overflow-hidden">
        <h1 className="text-[var(--special-text-color)] uppercase font-bold text-3xl text-center mb-4">
          Few Awards/<wbr></wbr>Recognitions
        </h1>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "backOut",
            },
          }}
          viewport={{ amount: 0.5, once: true }}
        >
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={true}
            animationHandler="slide"
            swipeScrollTolerance={5}
            showStatus={true}
            interval={5000}
            stopOnHover={true}
            // centerMode={true}
            // centerSlidePercentage={93}
            // centerSlidePercentage={88}
            className="projectCarousel"
          >
            <figure className="p-2">
              <Image
                src={award1}
                alt="Award for engagement champion of the year"
                className="w-full mb-4"
              />
              <figcaption className="text-justify">
                <span className="text-[var(--special-text-color)] font-bold">
                  Engagement champion Award (2023):
                </span>{" "}
                This award is given to a staff who is highly engaged at the job.
                Tackles challenges as opportunities and stands as an excellent
                example to colleagues.
              </figcaption>
            </figure>

            <figure className="p-2">
              <Image
                src={award2}
                alt="Award for Employee of the year 2022"
                className="w-full mb-4"
              />
              <figcaption className="text-justify">
                <span className="text-[var(--special-text-color)] font-bold">
                  Employee of the Year (2022):
                </span>{" "}
                This award is given to a staff who displays high level of
                proactivity, innovativeness and initiativeness in providing
                solutions to challenges and adding value.
              </figcaption>
            </figure>

            <figure className="p-2">
              <Image
                src={award3}
                alt="Award for Unsung hero of the year 2022"
                className="w-full mb-4"
              />

              <figcaption className="text-justify">
                <span className="text-[var(--special-text-color)] font-bold">
                  Unsung Hero of the Year Award (2022):
                </span>{" "}
                This award is given to a staff who quietly and consistently goes
                above and beyond to work and support others without fanfare.
              </figcaption>
            </figure>

            <figure className="p-2">
              <Image
                src={award4}
                alt="Award for Employee of the year 2021"
                className="w-full mb-4"
              />
              <figcaption className="text-justify">
                <span className="text-[var(--special-text-color)] font-bold">
                  Employee of the Year (2021):
                </span>{" "}
                This award is given to a staff who displays high level of
                proactivity, innovativeness and initiativeness in providing
                solutions to challenges and adding value.
              </figcaption>
            </figure>

            <figure className="p-2">
              <Image
                src={award5}
                alt="Award for Outstanding new comer of the year 2020"
                className="w-full mb-4"
              />
              <figcaption className="text-justify">
                <span className="text-[var(--special-text-color)] font-bold">
                  Outstanding new comer of the Year (2020):
                </span>{" "}
                This award is given to a new staff who demonstrates high level
                of excellence in overall job performance.
              </figcaption>
            </figure>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
