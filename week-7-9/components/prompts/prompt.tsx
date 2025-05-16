"use client";

import { useEffect } from "react";
import InputSection from "./inputsection/inputeSection";
import SuggestedPrompts from "./suggestedprompts/suggestedPrompts";
import { usePathname } from "next/navigation";
import { usePromptContext } from "../../app/context";

export default function Prompt() {
  const pathname = usePathname();
  const { selectedTool, updateSelectedTool, updatePrompt, toggleSidebar } = usePromptContext();

  useEffect(() => {
    updatePrompt("");
    if (pathname === "/response-section/secondTool") {
      updateSelectedTool(2);
    } else if (pathname === "/response-section/firstTool") {
      updateSelectedTool(1);
    } else {
      updateSelectedTool(0);
    }
  }, [pathname]);

  if (selectedTool === 1 || selectedTool === 2) {
    return (
      <div className={`mx-auto grid ${toggleSidebar ? "col-span-10" : "col-span-12"} row-span-2 w-full h-full`}>
        <div className="mx-auto h-auto flex flex-col gap-3 place-items-center">
          <InputSection />
          <SuggestedPrompts />
        </div>
      </div>
    );
  } else if (selectedTool === 0) {
    return (
      <div className="mx-auto grid col-span-12 row-span-4 w-full h-full">
        <div className="w-full text-sm bg-gray-200 text-center p-5 rounded-md text-black">
          Loading...
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
