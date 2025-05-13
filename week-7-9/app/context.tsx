"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import Prompts from "./(my-routes)/prompt/page";

// const PromptContext = createContext("");
type contextType = {
  prompt: string | null;
  updatePrompt: (value: string) => void;
  selectedTool: number | null;
  updateSelectedTool: (value: number) => void;
  response : any;
  updateResponse: (value:any) => void
};
const defaultContextValues: contextType = {
  prompt: "",
  updatePrompt: (value: string) => {},
  selectedTool: 0,
  updateSelectedTool: (value: number) => {},
  response: "",
  updateResponse: (value:any) => {} 
};
const PromptContext = createContext<contextType>(defaultContextValues);
export function usePromptContext() {
  return useContext(PromptContext);
}
type props = {
  children: ReactNode;
};

export function ContextProvider({ children }: props) {
  const [prompt, setPrompt] = useState<string>("");
  const [selectedTool, setSelectedTool] = useState<number>(0);
  const [response,setResponse] = useState<any>();
  const values = {
    prompt,
    updatePrompt: (value:string) => {
      setPrompt(value);
    },
    selectedTool,
    updateSelectedTool: (value:number) => {
      setSelectedTool(value);
    },
    response,
    updateResponse:(value:any)=>{
      setResponse(value);
    }
  };
  return (
    <>
      <PromptContext.Provider value={values}>
        <div className="grid col-span-10 row-span-2"><div className="flex flex-col justify-end">{children}</div></div>
        <Prompts />
      </PromptContext.Provider>
    </>
  );
}
