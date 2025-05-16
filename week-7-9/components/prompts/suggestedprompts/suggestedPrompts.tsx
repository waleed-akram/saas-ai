"use client";

import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { usePromptContext } from "../../../app/context";

export default function SuggestedPrompts() {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const { updatePrompt, selectedTool } = usePromptContext();

  function toggleSuggestions() {
    setShowSuggestion(!showSuggestion);
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
        className="underline text-gray-500 select-none sm:text-2xl text-md cursor-pointer"
        onClick={toggleSuggestions}
      >
        {showSuggestion ? "Hide" : "Try Some Prompts?"}
      </p>
      <div className="flex flex-row gap-3 max-w-200 flex-wrap justify-center content-evenly">
        {showSuggestion && (
          prompts[0].prompt.map((p, index) => (
            <div key={index}>
              <p
                className="prompt"
                onClick={(e) => handlePromptSelection(p)}
              >
                {p}
              </p>
            </div>
          ))
        ) }
      </div>
    </>
  );
}
