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
      } else {
        textarea.style.height = `${scrollHeight}px`;
        textarea.style.overflowY = "hidden";
      }
    }
  }

  function resetHeight() {
    const textarea = inputRef.current;
    textarea.style.height = `2rem`;
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
        resetHeight();
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
    <div className="place-items-center p-5">
      <span className="text-5xl font-bold">What can I help with?</span>
      <div className="mt-2 border-1 border-gray-300 shadow-lg pl-3 py-1 flex flex-row place-items-center rounded-4xl min-w-120 min-h-14">
        {/* <textarea rows={4} className="max-h-50"></textarea> */}
        <div className="overflow-none">
          <textarea
            cols={10}
            // rows={2}
            className="max-h-30 resize-none w-150 break-word focus:outline-none text-lg h-7 ml-1"
            placeholder="Type anything"
            value={prompt}
            onFocus={triggerFocus}
            onChange={handleChange}
            onKeyDown={handleEnter}
            ref={inputRef}
          />
        </div>
        <div
          className="bg-black cursor-pointer hover:bg-gray-600 hover:border-none h-fit rounded-full p-1.5 px-1.5 mr-2 outline-none"
          onClick={handleClick}
        >
          <FaArrowUp className="text-white" size={25}/>
        </div>
      </div>
    </div>
  );
}
