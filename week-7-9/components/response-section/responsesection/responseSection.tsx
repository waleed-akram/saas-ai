"use client";

import { useEffect, useState } from "react";

export default function ResponseSection({ params }: { params: string }) {
  const [output, setOutput] = useState<string>("");
  useEffect(() => {
    if (params) {
      generateText();
    }
  }, [params]);
  const generateText = async () => {
    try {
      console.log("sending req");
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: params }),
      });
      console.log("req sent");

      const data = await response.json();
      console.log("req recieved");
      setOutput(data.output);
      // console.log(data.output);
    } catch (error) {
      console.error("Error calling API route:", error);
    }
  };

  return (
    <div className=" bg-gray-200 place-items-center h-full rounded-md p-5 box-border min-w-250 min-h-80 m-4 overflow-hidden border-1 border-black">
      <div className="w-full h-full max-h-85">
        <p className="no-underline text-3xl w-full h-fit border-gray-500 p-5 rounded-md shadow-md border-3 resize-none">You: {params}</p>
        <textarea
          className="mt-5 no-underline text-3xl w-full h-fit min-h-78 max-h-78 border-gray-500 p-5 rounded-md shadow-md border-3 resize-none"
          value={`Chat Buddy: ${output}`}
        />
      </div>
    </div>
  );
}
