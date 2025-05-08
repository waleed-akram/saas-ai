"use client";

import { useState, useEffect,useContext } from "react";
import InputSection from "./input-section/page";
import SuggestedPrompts from "./suggested-prompts/page";
import { usePathname } from "next/navigation";
import { PromptContext } from "../../context";

export default function Prompts() {
  const pathname = usePathname();
  // console.log(pathname);
  const [selectedTool, setSelectedTool] = useState<number>(0);
  const [prompt, setPrompt] = useState<string>("");
  const usePromptContext = useContext(PromptContext);
  useEffect(() => {
    if (pathname === "/response-section/secondTool") {
      setSelectedTool(2);
    } else if (pathname === "/response-section/firstTool") {
      setSelectedTool(1);
    } else if (pathname === "/") {
      setSelectedTool(0);
    }
  }, [pathname]);

  if (selectedTool === 1 || selectedTool === 2) {
    return (
      <div className="ml-20">
        <div className="grid col-span-10 row-span-2">
          <div className="mx-auto h-auto flex flex-row gap-3">
            <InputSection prompt={prompt} setPrompt={setPrompt} />
            <SuggestedPrompts
              selectedTool={selectedTool}
              setPrompt={setPrompt}
            />
          </div>
        </div>
      </div>
    );
  } else if (selectedTool === 0) {
    <div className="ml-20">
      <div className="w-full no-wrap text-sm bg-gray-200 min-w-200 text-center p-5 rounded-md text-black">
        Loading...
      </div>
    </div>;
  } else {
    return <div></div>;
  }
}
