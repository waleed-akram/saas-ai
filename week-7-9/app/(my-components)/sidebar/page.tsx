"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import Link from "next/link";
import { RiRobot3Line } from "react-icons/ri";

export default function SideBar({
  setPromptVisibility,setSelectedTool
}: {
  setSelectedTool:Dispatch<SetStateAction<number>>,
  setPromptVisibility: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    window.addEventListener("resize", () => console.log(window.innerWidth));
  }, []);

  function handleNavClick(n){
    if(n==="home"){
      setSelectedTool(0)
      togglePromptFalse()
    } else if(n==="word"){
      setSelectedTool(1);
      togglePrompt()
    } else if(n==="image"){
      setSelectedTool(2);
      togglePrompt()
    }
  }

  function togglePrompt() {
    setTimeout(() => {
      setPromptVisibility(true);
    }, 250);
  }
  function togglePromptFalse() {
    setTimeout(() => {
      setPromptVisibility(false);
    }, 100);
  }

  return (
    <div className="grid col-span-2 row-span-4 w-full h-full  min-w-40 pl-2 bg-gray-100">
      <div className="mt-10 text-sm break-normal">
        <div className=" inline bg-white py-1.5 px-1 rounded-full mr-0.5">
          <RiRobot3Line className="inline -mr-1 mb-1" size={20} />{" "}
        </div>
        <Link href="/" className="text-gray-700 " onClick={e=>handleNavClick("home")}>
          SaaS AI
        </Link>
      </div>
      <div className="flex flex-col gap-1 px-1 -mt-50">
        <span className="text-xs font-bold p-1 ">~Tools~</span>
        <Link href="/content/firstTool" className="btn" onClick={e=>handleNavClick("word")}>
          Chat buddy
        </Link>
        <Link href="/content/secondTool" className="btn" onClick={e=>handleNavClick("image")}>
          Imagine
        </Link>
      </div>
    </div>
  );
}
