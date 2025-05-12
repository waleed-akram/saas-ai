"use client";

import { useEffect } from "react";
import InputSection from "./inputsection/inputeSection";
import SuggestedPrompts from "./suggestedprompts/suggestedPrompts";
import { usePathname } from "next/navigation";
import { usePromptContext } from "../../app/context";

export default function Prompt() {
  const pathname = usePathname();
  // console.log(pathname);
  // const [selectedTool, setSelectedTool] = useState<number>(0);
  // const [prompt, setPrompt] = useState<string>("");
  // const usePromptContext = useContext(PromptContext);
  const {selectedTool,updateSelectedTool,updatePrompt} = usePromptContext();
  useEffect(() => {
    if (pathname === "/response-section/secondTool") {
      // console.log("Routing to Imagine");
      updatePrompt("")
      updateSelectedTool(2);
    } else if (pathname === "/response-section/firstTool") {
      // console.log("Routing to Chat Buddy");
      updatePrompt("")
      updateSelectedTool(1);
    } else if (pathname === "/") {
      // console.log("Routing to Home");
      updatePrompt("")
      updateSelectedTool(0);
    }
  }, [pathname]);

  if (selectedTool === 1 || selectedTool === 2) {
    return (
      <div className="mx-auto pt-5 grid col-span-10 row-span-4 w-full h-full">
        <div className="mx-auto h-auto flex flex-col gap-3 place-items-center">
          <InputSection />
          <SuggestedPrompts />
        </div>
      </div>
    );
  } else if (selectedTool === 0) {
    <div className="mx-auto grid col-span-10 row-span-4 w-full h-full">
      <div className="w-full no-wrap text-sm bg-gray-200 min-w-200 text-center p-5 rounded-md text-black">
        Loading...
      </div>
    </div>;
  } else {
    return <div></div>;
  }
}
