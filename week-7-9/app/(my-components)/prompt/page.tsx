"use client";

import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Prompts() {
  const inputRef = useRef<String | null | undefined>("");
  function PromptSection() {
    function handleClick() {
      if (inputRef.current.value !== "") {
        const value = inputRef.current.value;
        alert(value);
        //promptresponse = true;
      }
    }

    return (
      <div>
        <input
          className="bg-white box rounded-lg p-2 border-1 border-blue-400 outline-none focus:ring-blue-500 focus:ring-1 pb-1 mb-2"
          type="text"
          placeholder="Type anything"
          ref={inputRef}
        />
        <button
          className="bg-blue-500 ml-2 cursor-pointer hover:bg-blue-700 hover:border-none rounded-lg p-1 m-auto focus:ring-blue-700 focus:ring-2 outline-none"
          onClick={handleClick}
        >
          <FaArrowUp className="text-white" />
        </button>
      </div>
    );
  }

  return (
    <div className="grid col-span-6 row-span-2 bg-indigo-50">
      <div className="m-auto">
        <PromptSection />
      </div>
    </div>
  );
}
