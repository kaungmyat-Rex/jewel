"use client";
import React, { useState } from "react";
import { VscSend } from "react-icons/vsc";
const Form = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      console.log("email invalid");
      return;
    }
    console.log(`${email} sent to ${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <div className="max-w-[376px] w-full h-[46px] ">
        <input
          type="email"
          className="w-full h-full bg-white rounded-md placeholder:font-dmsans placeholder:text-[14px] placeholder:text-[#434343] focus:outline-none pl-[10px]"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-[46px] h-[46px] bg-[#0D4269] flex justify-center items-center cursor-pointer"
      >
        <VscSend size={20} color="white" />
      </button>
    </form>
  );
};

export default Form;
