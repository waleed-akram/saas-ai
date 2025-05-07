"use client";

import { useRef, useState, Dispatch, SetStateAction } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function InputSection({
  prompt,
  setPrompt,
}: {
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
}) {
  let inputRef = useRef<HTMLTextAreaElement>(null);
  const [rows, setRows] = useState<number>(1);

  function handleChange(e) {
    if (e.key !== "Enter") {
      setPrompt(e.target.value);
      // if (field.scrollHeight > field.clientHeight) {
      // field.style.height = `${field.scrollHeight}px`;
      // }
      const textarea = inputRef.current;
      if (textarea) {
        textarea.style.height = "0";

        const scrollHeight = textarea.scrollHeight;
        const maxHeight = parseInt(getComputedStyle(textarea).maxHeight, 10);
        // const minHeight = parseInt(getComputedStyle(textarea).maxHeight, 10);

        if (scrollHeight > maxHeight) {
          textarea.style.height = `${maxHeight}px`;
          textarea.style.overflowY = "auto";
        } else {
          textarea.style.height = `${scrollHeight}px`;
          textarea.style.overflowY = "hidden";
        }
      }
    }
  }

  function handleEnter(e) {
    // console.log(e.key);
    if (e.key === "Enter" && !e.shiftKey) {
      if (inputRef.current.value.trim() !== "") {
        const value = inputRef.current.value;
        setPrompt("");
        alert(value);
      } else {
        alert("No prompt entered!");
        setPrompt("");
      }
    }
  }

  function handleClick() {
    if (inputRef.current.value !== "") {
      const value = inputRef.current.value;
      setPrompt("");
      alert(value);
    }
  }

  return (
    <div className="place-items-center">
      <span className="text-lg font-bold">What can I help with?</span>
      <div className="border-1 border-gray-300 shadow-md pr-2 pl-3 py-1 flex flex-row place-items-end rounded-2xl">
        <div>
          <textarea
            rows={rows}
            cols={10}
            className="resize-none w-60 break-word max-h-20 focus:outline-none mt-0.5 text-xs"
            placeholder="Type anything"
            value={prompt}
            onChange={handleChange}
            onKeyDown={handleEnter}
            ref={inputRef}
          />
        </div>
        <button
          className="bg-black cursor-pointer hover:bg-gray-600 hover:border-none h-fit rounded-full p-1 px-1.5 outline-none"
          onClick={handleClick}
        >
          <FaArrowUp className="text-white" />
        </button>
      </div>
    </div>
  );
}
