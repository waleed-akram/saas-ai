"use client";

import * as React from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Prompts() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  function PromptSection() {
    function handleClick() {
      if (inputRef.current.value !== "") {
        const value = inputRef.current.value;
        alert(value);
        //promptresponse = true;
      }
    }

    return (
      <div className="border-1 border-black pr-1 pl-3 py-1 rounded-lg">
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Type anything"
          ref={inputRef}
        />
        <div className="mt-1 inline">
          <button
            className="bg-black  cursor-pointer hover:bg-gray-600 hover:border-none rounded-lg p-1 outline-none"
            onClick={handleClick}
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid col-span-10 row-span-2">
      <div className="m-auto">
        <PromptSection />
      </div>
    </div>
  );
}
