"use client"

import { useEffect,useState } from "react";

export default function SuggestedPrompts({selectedTool}: {selectedTool:number}) {
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

  useEffect(() => {
    let new_map: void[] = prompts[selectedTool].prompt.map((p) => {
      console.log(p);
    });
    setPromptsToShow(new_map);
  }, [selectedTool]);

  const [promptsToShow, setPromptsToShow] = useState<void[]>([]);
  return (
    <div className="prompt-div">
      <p className="underline text-gray-500 text-xs">Try a prompt</p>

      {/* {prompts.map((o, index) => (
                <div key={index}>
                  {
                  o.prompt.map((prompt)=>(
                  <div>
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
              ))} */}
      {/* {promptsToShow} */}
    </div>
  );
}
