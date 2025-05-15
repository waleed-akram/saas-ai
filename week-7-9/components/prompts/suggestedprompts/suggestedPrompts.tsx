"use client";

import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { usePromptContext } from "../../../app/context";

export default function SuggestedPrompts() {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [indexIn, setIndex] = useState<number>(0);
  const { updatePrompt, selectedTool } = usePromptContext();

  function toggleIconShow(index) {
    setShowIcon(true);
    setIndex(index);
  }

  function toggleSuggestions() {
    setShowSuggestion(!showSuggestion);
  }

  function toggleIconHide(index) {
    setShowIcon(false);
    setIndex(index);
  }

  const prompts: { for: string; prompt: string[] }[] = [
    {
      for: "text",
      prompt: [
        "Why is the sun hot?",
        "Debate on Pakistan's historical moments",
        "Cats are better than dogs",
        "Is AI the new trend?",
      ],
    },
    {
      for: "image",
      prompt: [
        "Generate an image of a cool sword",
        "Show me a cute cat",
        "Imagine a new color",
        "I want to see A tree in a trunk",
      ],
    },
  ];

  function handlePromptSelection(p) {
    updatePrompt(p);
  }

  return (
    <>
      <p
        className="underline text-gray-500 select-none text-2xl cursor-pointer"
        onClick={toggleSuggestions}
      >
        {showSuggestion?"Hide":"Try Some Prompts?"}
      </p>
      <div className="flex flex-row gap-3 max-w-200 flex-wrap justify-center content-evenly">
        {showSuggestion && selectedTool && selectedTool > 0 ? (
          prompts[selectedTool - 1].prompt.map((p, index) => (
            <div key={index}>
              <p
                className="prompt"
                onMouseEnter={() => toggleIconShow(index)}
                onMouseOut={() => toggleIconHide(index)}
                onClick={(e) => handlePromptSelection(p)}
              >
                {p}
                {/* {showIcon && index === indexIn && (
                  <FaArrowUp className="text-black -mt-1 inline" />
                )} */}
              </p>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
