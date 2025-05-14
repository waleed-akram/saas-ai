"use client";

import { useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { usePromptContext } from "../../../app/context";
import { useRouter } from "next/navigation";

export default function InputSection({ sentFrom }: { sentFrom: string }) {
  const route = useRouter();
  const { prompt, updatePrompt, selectedTool } = usePromptContext();
  // const [usersimage,setUserImage] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  let inputRef = useRef<HTMLTextAreaElement>(null);

  function triggerFocus() {
    setFocus(true);
  }

  const handleSubmit = () => {
    if (selectedTool === 1) {
      updatePrompt("");
      route.push(
        `/response-section/firstTool/response?value=${encodeURIComponent(
          prompt
        )}`
      );
    } else if (selectedTool === 2) {
      updatePrompt("");
      route.push(
        `/response-section/secondTool/response?value=${encodeURIComponent(
          prompt
        )}`
      );
    } else {
      updatePrompt("");
      return "failure";
    }
  };

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
      updatePrompt(e.target.value);
      setFieldHeight();
    } else {
      updatePrompt("");
    }
  }

  function handleEnter(e) {
    if (e.key === "Enter" && !e.shiftKey && focus) {
      e.preventDefault();
      if (prompt.trim() !== "") {
        const result = handleSubmit();
        setFocus(false);
        updatePrompt("");
        resetHeight();
      } else if (prompt.trim() === "") {
        alert("No prompt entered!");
        updatePrompt("");
      }
    }
  }

  function handleClick() {
    if (prompt !== "") {
      const value = prompt;
      const result = handleSubmit();
      setFieldHeight();
    }
  }

  return (
    <div className="place-items-center p-5">
      <div className="border-1 border-gray-300 shadow-lg pl-3 py-1 flex flex-row place-items-center rounded-4xl min-w-120 min-h-14">
        <div className="overflow-none">
          <textarea
            cols={10}
            className="max-h-30 resize-none w-150 break-word focus:outline-none text-lg h-6 ml-1"
            placeholder="Type anything"
            value={prompt}
            onFocus={triggerFocus}
            onChange={handleChange}
            onKeyDown={handleEnter}
            ref={inputRef}
          />
        </div>
        <div
          className="bg-indigo-500 cursor-pointer hover:bg-indigo-800 hover:border-none h-fit rounded-full p-1.5 px-1.5 mr-2 outline-none"
          onClick={handleClick}
        >
          <FaArrowUp className="text-white" size={25} />
        </div>
      </div>
      
      {/* <div className="w-fit">
        {sentFrom && sentFrom === "imagine" ? (
          <div className="border-gray-200 border-1 p-2 w-fit rounded-md mt-5 text-center bg-pink-600 text-white hover:cursor-pointer">
            <input type="file" id="file" accept="image/*" className="hover:cursor-pointer hidden"/>
            <label htmlFor="file" className="hover:cursor-pointer">Select an image</label>
            <div>{usersImage}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div> */}
    </div>
  );
}
