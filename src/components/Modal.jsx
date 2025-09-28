import { X } from "lucide-react";
import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed bg-zinc-500/50 inset-0 flex items-center justify-center">
      <div className="w-[90%] max-w-lg bg-white shadow-lg p-6 rounded-lg">
        <div className="flex py-3 justify-between border-b border-zinc-500">
          <h2 className="text-lg font-semibold">Sign Up</h2>
          <X onClick={() => onClose()} className="cursor-pointer" />
        </div>
        <form className="flex flex-col gap-5 py-5">
          <input
            className="p-2 outline-none rounded-md bg-zinc-100 "
            type="email"
            placeholder="Your Email"
          />
          <input
            className="p-2 outline-none rounded-md bg-zinc-100"
            type="password"
            placeholder="Your Password"
          />
          <a className="font-semibold text-black/70 underline" href="">
            Forgot Your Password?
          </a>
          <button className="px-8 py-3 bg-zinc-200 hover:bg-zinc-300 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
