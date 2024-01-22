"use client";

import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiCheck, BiCopy } from "react-icons/bi";
import { IoCaretDown } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import sendEmail from "../serverActions/sendEmailAction";
import Button from "./contactButton";
import { motion, useInView } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
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

  // This useRef is added to the contact form, so we can reset the form when the email is sent
  const formRef = useRef(null);

  const contactAnimation = {
    hidden: {
      opacity: 0,
      transform: "translateY(-10px)",
      transition: {
        duration: 0.1,
        ease: "linear",
      },
    },

    visible: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: {
        duration: 0.1,
        ease: "linear",
      },
    },
  };

  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { amount: 0.5, once: true });

  return (
    <section
      id="contact"
      className="px-4 py-16 min-[650px]:flex justify-center items-center scroll-mt-[10px]"
      ref={contactRef}
    >
      <div className="flex-[0_1_650px] overflow-hidden">
        <fieldset className="border-4 border-[var(--special-text-color)] p-4 min-[500px]:p-8 rounded-full">
          <legend className="text-[var(--special-text-color)] uppercase font-bold text-3xl text-center mb-4 pt-6 mx-auto my-0 px-1">
            Contact me
          </legend>

          <p className="text-center text-base min-[400px]:text-xl font-bold p-2">
            <span className="sr-only">I reply almost immediately!</span>
            <motion.span
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                staggerChildren: 0.1,
              }}
              aria-hidden
              className="inline-block"
            >
              {"I reply almost immediately!".split("").map((character, i) => {
                if (character === " ") {
                  return (
                    <span key={i} className="inline-block">
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <motion.span
                    variants={contactAnimation}
                    key={i}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          </p>

          <article className="flex gap-6 py-8 justify-center">
            <div className="relative group">
              <button
                type="button"
                aria-label="Email"
                title="Email"
                className="text-xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8 peer"
                onClick={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailContact").focus();
                }}
                onTouchStart={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailContact").focus();
                }}
                onMouseEnter={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpEmailContact").focus();
                }}
              >
                <MdMarkEmailUnread className="min-[450px]:text-3xl" />
              </button>

              <div
                id="popUpEmailAndPhoneNumber"
                className="popUpEmailContact absolute -top-9 -left-2 bg-white gap-4 p-1 rounded-2xl hidden hover:flex focus:flex group-focus-within:flex focus-within:flex group-focus:flex peer-focus:flex peer-focus-within:flex group-hover:flex peer-hover:flex"
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
                aria-label="Call"
                title="Call"
                className="text-xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8 peer"
                onClick={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpPhoneContact").focus();
                }}
                onTouchStart={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpPhoneContact").focus();
                }}
                onMouseEnter={(e) => {
                  e.target.focus();
                  document.querySelector(".popUpPhoneContact").focus();
                }}
              >
                <FaSquarePhone className="min-[450px]:text-3xl" />
              </button>

              <div
                id="popUpEmailAndPhoneNumber"
                className="popUpPhoneContact absolute -top-9 -left-10 bg-white gap-4 p-1 rounded-2xl hidden hover:flex focus:flex group-focus-within:flex focus-within:flex group-focus:flex peer-focus:flex peer-focus-within:flex group-hover:flex peer-hover:flex"
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
              className="text-xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8"
            >
              <FaLinkedin className="min-[450px]:text-3xl" />
            </Link>

            <Link
              href="https://github.com/udoh-abasi"
              target="_blank"
              rel="nofollow"
              aria-label="Github Profile"
              title="Github"
              className="text-xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8"
            >
              <FaGithub className="min-[450px]:text-3xl" />
            </Link>

            <Link
              id="twitterContact"
              href="https://twitter.com/tropyganty0"
              target="_blank"
              rel="nofollow"
              aria-label="Twitter X Profile"
              title="X"
              className="text-xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8"
            >
              <FaXTwitter className="min-[450px]:text-3xl" />
            </Link>
          </article>

          <form
            ref={formRef}
            action={async (formData) => {
              const result = await sendEmail(formData);

              if (result?.sent) {
                // If the mail is sent successfully, then we clear all the fields in the form.
                // First, we make sure that the 'formRef.current' is NOT 'null' or 'undefined' by putting a question mark (?) in front of it
                formRef.current?.reset();

                // NOTE: The <Toaster/> is in 'layout.js'
                toast.success("Email sent successfully!");
              } else {
                toast.error("Email sending failed!");
              }
            }}
          >
            <div className="flex flex-col-reverse my-8 relative">
              <input
                type="text"
                required
                aria-required
                placeholder=" "
                id="name"
                name="name"
                className="h-10 rounded-xl ring-2 ring-[var(--special-text-color)] p-1 peer"
              />

              <label
                htmlFor="name"
                className="cursor-text p-1 text-gray-400 absolute peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:top-[-90%] peer-focus:translate-y-[0] top-[-90%] transition-all duration-500 ease-linear"
              >
                Name&nbsp;<span className="text-red-500">&#42;</span>
              </label>
            </div>

            <div className="flex flex-col-reverse mb-8 relative mt-16">
              <input
                type="email"
                required
                aria-required
                placeholder=" "
                id="email"
                name="email"
                className="h-10 rounded-xl ring-2 ring-[var(--special-text-color)] p-1 peer"
              />

              <label
                htmlFor="email"
                className="cursor-text text-gray-400  p-1 absolute peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-focus:top-[-90%] peer-focus:translate-y-[0] top-[-90%] transition-all duration-500 ease-linear"
              >
                Email&nbsp;<span className="text-red-500">&#42;</span>
              </label>
            </div>

            <div className="mb-8 relative mt-16">
              <textarea
                id="message"
                name="message"
                required
                placeholder=" "
                aria-required
                className="block w-full rounded-3xl p-1 resize-none h-[200px] border-0 peer ring-2 ring-[var(--special-text-color)]"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-gray-400  peer-placeholder-shown:top-[5%]  peer-focus:top-[-12%] top-[-12%] left-[0.5rem] transition-all duration-500 ease-linear cursor-text"
              >
                Message&nbsp;<span className="text-red-500">&#42;</span>
              </label>
            </div>

            <Button />
          </form>
        </fieldset>
      </div>
    </section>
  );
};

export default Contact;
