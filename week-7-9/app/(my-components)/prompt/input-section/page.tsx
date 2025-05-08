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
  const [focus, setFocus] = useState<boolean>(false);
  let inputRef = useRef<HTMLTextAreaElement>(null);

  function triggerFocus() {
    setFocus(true);
  }

  function setFieldHeight() {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "0";

      const scrollHeight = textarea.scrollHeight;
      const maxHeight = parseInt(getComputedStyle(textarea).maxHeight, 10);

      if (scrollHeight > maxHeight) {
        textarea.style.height = `${maxHeight}px`;
        textarea.style.overflowY = "auto";
      } else if (scrollHeight === 0) {
        textarea.style.height = `0px`;
        textarea.style.overflowY = "hidden";
      } else {
        textarea.style.height = `${scrollHeight}px`;
        textarea.style.overflowY = "hidden";
      }
    }
  }

  function handleChange(e) {
    if (e.key !== "Enter") {
      setPrompt(e.target.value);
      setFieldHeight();
    } else {
      setPrompt("");
    }
  }

  function handleEnter(e) {
    if (e.key === "Enter" && !e.shiftKey && focus) {
      e.preventDefault();
      if (prompt.trim() !== "") {
        alert(prompt);
        setFocus(false);
        setPrompt("");
        setFieldHeight();
      } else if (prompt.trim() === "") {
        alert("No prompt entered!");
        setPrompt("");
      }
    }
  }

  function handleClick() {
    if (prompt !== "") {
      const value = prompt;
      setPrompt("");
      alert(value);
      setFieldHeight();
    }
  }

  return (
    <div className="place-items-center">
      <span className="text-lg font-bold">What can I help with?</span>
      <div className="border-1 border-gray-300 shadow-md pr-2 pl-3 py-1 flex flex-row place-items-end rounded-2xl">
        <div>
          <textarea
            cols={10}
            className="resize-none w-60 break-word max-h-20 focus:outline-none text-xs -mb-0.5"
            placeholder="Type anything"
            value={prompt}
            onFocus={triggerFocus}
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
