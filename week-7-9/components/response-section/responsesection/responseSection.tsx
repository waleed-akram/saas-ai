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
      console.log(data.output);
    } catch (error) {
      console.error("Error calling API route:", error);
    }
  };

  return (
    <div className="mx-auto bg-gray-200 w-fit h-fit place-items-center rounded-md p-5 box-border min-w-250 min-h-80 max-h-80 max-w-250 my-4 overflow-hidden">
      <div className=" text-justify">
      <p className="no-underline text-3xl">You: {params}</p>
      <p>____________________________________________________________________________________________________________</p>
      <p className="mt-5 no-underline text-3xl">Chat Buddy: {output}</p>
      </div>
    </div>
  );
}
