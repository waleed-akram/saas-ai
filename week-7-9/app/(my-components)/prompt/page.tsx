"use client"

import { useState } from "react";
import InputSection from "./input-section/page";
import SuggestedPrompts from "./suggested-prompts/page";

export default function Prompts({
  promptVisibility,
  selectedTool,
}: {
  promptVisibility: boolean;
  selectedTool: number;
}) {
  const [prompt,setPrompt] = useState<string>("");
  return (
    <div className="ml-20">
      {promptVisibility && (
        <div className="grid col-span-10 row-span-2">
          <div className="mx-auto h-auto flex flex-row gap-3">
            <InputSection prompt={prompt} setPrompt={setPrompt}/>
            <SuggestedPrompts selectedTool={selectedTool} setPrompt={setPrompt}/>
          </div>
        </div>
      )}
    </div>
  );
}
