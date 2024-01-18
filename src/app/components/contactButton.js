"use client";
import { useFormStatus } from "react-dom";

const Button = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit">{pending ? "...Loading" : "Send Message"}</button>
  );
};

export default Button;
