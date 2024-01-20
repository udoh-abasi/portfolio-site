"use client";
import { useFormStatus } from "react-dom";
import { BsFillSendArrowDownFill } from "react-icons/bs";
import Loader from "./loader";

const Button = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full mb-28 font-bold uppercase relative flex items-center justify-center px-6 py-3 text-lg tracking-tighter text-[rgb(var(--nav-bg-color))] bg-gray-80 rounded-md group disabled:cursor-not-allowed"
    >
      <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[rgb(var(--foreground-rgb))] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
      <span className="absolute inset-0 w-full h-full bg-[var(--special-text-color)] rounded-md "></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[rgb(var(--foreground-rgb))] rounded-md opacity-0 group-hover:opacity-100 "></span>
      <span className="relative transition-colors duration-200 ease-in-out delay-100 group-hover:text-[rgb(var(--nav-bg-color))] flex items-center">
        {pending ? (
          <Loader />
        ) : (
          <>
            Send Message <BsFillSendArrowDownFill className="ml-2" />
          </>
        )}
      </span>
    </button>
  );
  // return (
  //   <button type="submit">{pending ? "...Loading" : "Send Message"}</button>
  // );
};

export default Button;
