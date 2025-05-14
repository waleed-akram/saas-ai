"use client";

import { useEffect, useState } from "react";

export default function ResponseSection({
  params,
  sentFrom,
}: {
  params: string;
  sentFrom: string;
}) {
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
    <div className="h-full mx-auto rounded-md p-5 box-border w-280 min-h-80 m-4 overflow-hidden">
      <div className="h-full w-full max-h-85">
        <div className="bg-gray-200 float-right no-underline text-2xl w-200 h-fit p-5 roundedPrompt  shadow-md">
          <p>You: {params}</p>
        </div>
        <div className="float-left bg-gray-200 mt-5 no-underline text-2xl w-full h-full min-h-78 max-h-78 px-20 py-5 roundedResponse shadow-md">
          <textarea
            readOnly
            className="w-full h-full resize-none"
            value={output}
          />
        </div>
      </div>
    </div>
  );
}
