"use client";

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
  // let new_map = prompts.map((o,index)=>{
  //   console.log(o.prompt[index])
  // })

  return (
    <div className="ml-20">
      {promptVisibility && (
        <div className="grid col-span-10 row-span-2">
          <div className="mx-auto h-auto flex flex-row gap-3">
            <InputSection />
            <SuggestedPrompts selectedTool={selectedTool} />
          </div>
        </div>
      )}
    </div>
  );
}
