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

  const [emailSent, setEmailSent] = useState("");

  useEffect(() => {
    console.log("Email sent", emailSent);
  }, [emailSent]);

  return (
    <section
      id="contact"
      className="px-4 py-16 min-[650px]:flex justify-center items-center scroll-mt-[10px]"
    >
      <div className="flex-[0_1_650px] overflow-hidden">
        <h1 className="text-[var(--special-text-color)] uppercase font-bold text-3xl text-center mb-4">
          Contact me
        </h1>

        <article className="flex gap-6 py-8 justify-center">
          <div className="relative group">
            <button
              type="button"
              aria-label="Email"
              title="Email"
              className="text-xl block ring-2 rounded-full ring-[var(--special-text-color)] p-1 text-[var(--special-text-color)] hover:ring-8 peer"
            >
              <MdMarkEmailUnread className="min-[450px]:text-3xl" />
            </button>

            <div
              id="popUpEmailAndPhoneNumber"
              className="absolute -top-9 -left-2 bg-white gap-4 p-1 rounded-2xl hidden hover:flex focus:flex group-focus-within:flex focus-within:flex group-focus:flex peer-focus:flex"
            >
              <Link
                href="mailto:udoh.aba@gmail.com"
                target="_blank"
                className="underline text-blue-400"
              >
                udohdev@gmail.com
              </Link>

              <div className="bg-gray-700 rounded-xl inline text-[#70dbb8] font-bold">
                {!copied ? (
                  <button
                    type="button"
                    aria-label="Copy"
                    title="Copy"
                    onClick={async () => {
                      // When the button is clicked, copy the text to the clipboard
                      await navigator.clipboard.writeText("udohdev@gmail.com");
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
            >
              <FaSquarePhone className="min-[450px]:text-3xl" />
            </button>

            <div
              id="popUpEmailAndPhoneNumber"
              className="absolute -top-9 -left-10 bg-white gap-4 p-1 rounded-2xl hidden hover:flex focus:flex group-focus-within:flex focus-within:flex group-focus:flex peer-focus:flex"
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
            console.log("The res", result);

            if (result?.sent) {
              // If the mail is sent successfully, then we clear all the fields in the form.
              // First, we make sure that the 'formRef.current' is NOT 'null' or 'undefined' by putting a question mark (?) in front of it
              formRef.current?.reset();
            }

            setEmailSent(result?.sent);
          }}
        >
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              id="Name"
              required
              onChange={() => {
                setEmailSent("");
              }}
            />
          </div>

          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              placeholder=" "
              id="Email"
              required
              onChange={() => {
                setEmailSent("");
              }}
            />
          </div>

          <div>
            <label htmlFor="Message">Message</label>
            <textarea
              name="message"
              placeholder=" "
              id="Message"
              required
              onChange={() => {
                setEmailSent("");
              }}
            ></textarea>
          </div>
          <Button />
        </form>
      </div>
    </section>
  );
};

export default Contact;
