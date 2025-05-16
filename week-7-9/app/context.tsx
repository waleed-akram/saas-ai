"use client";
import { createContext, useContext, ReactNode, useState } from "react";
import Prompt from "./(my-routes)/prompt/page";
import SideBar from "./(my-routes)/sidebar/page";
import { TbLayoutSidebarFilled } from "react-icons/tb";

type contextType = {
  prompt: string | null;
  updatePrompt: (value: string) => void;
  selectedTool: number | null;
  updateSelectedTool: (value: number) => void;
  response: any;
  updateResponse: (value: any) => void;
  toggleSidebar: boolean;
  updateToggleSidebar: (value: boolean) => void;
};
const defaultContextValues: contextType = {
  prompt: "",
  updatePrompt: (value: string) => {},
  selectedTool: 0,
  updateSelectedTool: (value: number) => {},
  response: "",
  updateResponse: (value: any) => {},
  toggleSidebar: true,
  updateToggleSidebar: (value: boolean) => {},
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
  const [response, setResponse] = useState<any>();
  const [toggleSidebar, setSidebarToggle] = useState<boolean>(true);
  const values = {
    prompt,
    updatePrompt: (value: string) => {
      setPrompt(value);
    },
    selectedTool,
    updateSelectedTool: (value: number) => {
      setSelectedTool(value);
    },
    response,
    updateResponse: (value: any) => {
      setResponse(value);
    },
    toggleSidebar,
    updateToggleSidebar: (value: boolean) => {
      setSidebarToggle(value);
    },
  };
  return (
    <>
      <PromptContext.Provider value={values}>
        <div
          className={`${
            toggleSidebar
              ? "grid col-span-2 row-span-4 sm:w-full sm:min-h-screen"
              : "hidden"
          } h-full`}
        >
          <div className="block w-full h-full">
            <SideBar />
          </div>
        </div>
        <div
          className={`grid ${
            toggleSidebar ? "col-span-10" : "col-span-12"
          } place-items-center row-span-2`}
        >
          <div
            className={`flex flex-col justify-end w-full h-full ${
              !toggleSidebar ? "items-center" : ""
            }`}
          >
            {!toggleSidebar && (
              <button
                className="p-1 animateR bg-blue-500 text-white rounded-md mb-4 cursor-pointer absolute top-4 left-4 text-3xl"
                onClick={() => setSidebarToggle(true)}
              >
                <TbLayoutSidebarFilled />
              </button>
            )}
            {children}
          </div>
        </div>

        <Prompt />
      </PromptContext.Provider>
    </>
  );
}
