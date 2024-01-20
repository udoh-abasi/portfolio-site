"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import cert1 from "../../../public/Certificate- PCAP-small.webp";
import cert2 from "../../../public/Certificate- Advanced Python-small.webp";
import cert3 from "../../../public/Certificate- Data Structures and Algorithm-small.webp";
import cert4 from "../../../public/Certificate- Django-small.webp";
import cert5 from "../../../public/Certificate- React-small.webp";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="px-4 py-16 flex justify-center items-center scroll-mt-[10px]"
    >
      <div className="flex-[0_1_650px]">
        <h1 className="text-[var(--special-text-color)] uppercase font-bold text-3xl text-center mb-4">
          Relevant certifications
        </h1>

        <motion.div
          initial={{ translateY: "-160px", translateX: "-160px", opacity: 0 }}
          whileInView={{
            translateY: "0px",
            translateX: "0px",
            opacity: 1,
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
            // centerMode={false}
            // centerSlidePercentage={93}
            // centerSlidePercentage={88}
            className="projectCarousel"
          >
            <Image
              src={cert1}
              alt="Udoh Abasi's PCAP Certificate"
              className="w-full mb-4  hover:scale-110"
            />

            <Image
              src={cert2}
              alt="Udoh Abasi's LinedIn Python Certificate"
              className="w-full mb-4  hover:scale-110"
            />

            <Image
              src={cert3}
              alt="Udoh Abasi's LinkedIn data structures and algorithm Certificate"
              className="w-full mb-4  hover:scale-110"
            />

            <Image
              src={cert4}
              alt="Udoh Abasi's LinkedIn Django Certificate"
              className="w-full mb-4  hover:scale-110"
            />

            <Image
              src={cert5}
              alt="Udoh Abasi's LinkedIn React Certificate"
              className="w-full mb-4  hover:scale-110"
            />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
