"use client";

import { useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { usePromptContext } from "../../../app/context";
import { useRouter } from "next/navigation";

export default function InputSection() {
  const router = useRouter();
  const { prompt, updatePrompt, selectedTool } = usePromptContext();
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function triggerFocus() {
    setFocus(true);
  }

  const handleSubmit = () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }

    updatePrompt("");

    if (selectedTool === 1) {
      router.push(`/response-section/firstTool/response?value=${encodeURIComponent(prompt)}`);
    } else if (selectedTool === 2) {
      router.push(`/response-section/secondTool/response?value=${encodeURIComponent(prompt)}`);
    }
  };

  function setFieldHeight() {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "0px";
      const scrollHeight = textarea.scrollHeight;
      const maxHeight = parseInt(getComputedStyle(textarea).maxHeight, 10);

      textarea.style.height = scrollHeight > maxHeight ? `${maxHeight}px` : `${scrollHeight}px`;
      textarea.style.overflowY = scrollHeight > maxHeight ? "auto" : "hidden";
    }
  }

  function resetHeight() {
    const textarea = inputRef.current;
    if (textarea) textarea.style.height = "2rem";
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    updatePrompt(e.target.value);
    setFieldHeight();
  }

  function handleEnter(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey && focus) {
      e.preventDefault();
      if (prompt.trim()) {
        handleSubmit();
        setFocus(false);
        resetHeight();
      } else {
        alert("No prompt entered!");
        updatePrompt("");
      }
    }
  }

  function handleClick() {
    if (prompt.trim()) {
      handleSubmit();
      setFieldHeight();
    }
  }

  return (
    <div className="w-full px-4 lg:px-8 max-w-4xl mx-auto sm:mt-6 mt-1">
      <div className="flex items-center bg-white border border-gray-300 shadow-md rounded-3xl sm:px-4 py-1 px-3 w-90 sm:w-200 lg:w-200 md:w-184">
        <textarea
          ref={inputRef}
          rows={1}
          placeholder="Type anything..."
          value={prompt}
          onFocus={triggerFocus}
          onChange={handleChange}
          onKeyDown={handleEnter}
          className="flex-grow resize-none max-h-40 sm:h-8 md:h-7 overflow-hidden text-base focus:outline-none placeholder-gray-400"
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full"
          onClick={handleClick}
        >
          <FaArrowUp className="sm:text-2xl text-md" />
        </button>
      </div>
    </div>
  );
}
