"use client";
import { createContext,useState } from "react";
import Prompts from "./(my-components)/prompt/page";

export const PromptContext = createContext("");
export function ContextProvider({ children }) {
  const [prompt,setPrompt] = useState<string>("");
  return (
    <>
      <PromptContext.Provider value={prompt} setValue={setPrompt}>
        <div className="grid col-span-10 row-span-2 pt-15">{children}</div>
        <Prompts />
      </PromptContext.Provider>
    </>
  );
}
