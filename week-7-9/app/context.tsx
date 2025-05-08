"use client";
import { createContext } from "react";
import Prompts from "./(my-components)/prompt/page";

export const PromptContext = createContext("");
export function ContextProvider({ children }) {
  return (
    <>
      <PromptContext.Provider value={"No Prompt"}>
        <div className="grid col-span-10 row-span-2 pt-15">{children}</div>
        <Prompts />
      </PromptContext.Provider>
    </>
  );
}
