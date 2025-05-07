"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function SuggestedPrompts({
  selectedTool,
  setPrompt,
}: {
  selectedTool: number;
  setPrompt: Dispatch<SetStateAction<string>>;
}) {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [indexIn, setIndex] = useState<number>(0);

  function toggleIconShow(index) {
    setShowIcon(true);
    setIndex(index);
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
    setPrompt(p);
  }

  return (
    <div className="prompt-div">
      <p className="underline text-gray-500 text-xs">Try a prompt</p>

      {selectedTool > 0 ? (
        prompts[selectedTool - 1].prompt.map((p, index) => (
          <div key={index}>
            <p
              className="prompt"
              onMouseEnter={() => toggleIconShow(index)}
              onMouseOut={() => toggleIconHide(index)}
              onClick={(e) => handlePromptSelection(p)}
            >
              |{p}|{" "}
              {showIcon && index === indexIn && (
                <FaArrowUp className="text-black inline" />
              )}
            </p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
