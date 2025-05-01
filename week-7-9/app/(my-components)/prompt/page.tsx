"use client";

import { useState, useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Prompts({
  promptVisibility,
}: {
  promptVisibility: boolean;
}) {
  let inputRef = useRef<HTMLTextAreaElement>(null);

  function PromptSection() {
    const [inputfield, setInputField] = useState<string>("");
    const [rows, setRows] = useState<number>(1);

    useEffect(() => {
      if (inputfield.length > 35) {
        setRows(2);
      }
      if (inputfield.length > 70) {
        setRows(3);
      }
      if (inputfield.length > 105) {
        setRows(4);
      }
      if (inputfield.length === 0) {
        setRows(1);
      }
    }, [inputfield]);

    function handleChange(e) {
      // if (inputfield.length > 39) {
      //   setRows(2);
      // }
      // if (inputfield.length > 78) {
      //   setRows(3);
      // }
      // if (inputfield.length > 117) {
      //   setRows(4);
      // }
      // if (inputfield.length === 0) {
      //   setRows(1);
      // }
      setInputField(e.target.value);
    }

    function handleClick() {
      if (inputRef.current.value !== "") {
        const value = inputRef.current.value;
        setInputField("");
        alert(value);
        //promptresponse = true;
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
              value={inputfield}
              onChange={handleChange}
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

  const prompts: string[] = [
    "Why is the sun hot?",
    "Debate on Pakistan's historical moments",
    "Cats are better than dogs",
    "Is AI the new trend?",
  ];

  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [indexIn, setIndex] = useState<number>(0);

  function toggleIcon(index) {
    setShowIcon(!showIcon);
    setIndex(index);
  }

  return (
    <div className="ml-20">
      {promptVisibility && (
        <div className="grid col-span-10 row-span-2">
          <div className="mx-auto h-auto flex flex-row gap-3">
            <PromptSection />
            <div className="prompt-div">
              <p className="underline text-gray-500 text-xs">Try a prompt</p>
              {prompts.map((prompt, index) => (
                <div key={index}>
                  <p
                    className="prompt"
                    onMouseEnter={() => toggleIcon(index)}
                    onMouseLeave={() => toggleIcon(index)}
                  >
                    |{prompt}|{" "}
                    {showIcon && index === indexIn && (
                      <FaArrowUp className="text-black inline" />
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
