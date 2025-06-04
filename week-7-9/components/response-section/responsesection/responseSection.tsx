"use client";

import { useEffect, useState, useRef } from "react";

export default function ResponseSection({
  params,
  sentFrom,
}: {
  params: string;
  sentFrom: string;
}) {
  const outputRef = useRef<HTMLTextAreaElement>(null);
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
      console.log("req received");
      setOutput(data.output);
    } catch (error) {
      console.error("Error calling API route:", error);
    }
  };

  return (
    <div className="w-full px-4 sm:px-8 py-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="self-end bg-blue-500 text-white text-lg sm:text-xl p-4 rounded-xl shadow-md sm:max-w-md">
          <p>
            <span className="font-semibold">You:</span> {params}
          </p>
        </div>

        <div className="self-start bg-gray-100 text-gray-900 text-base sm:text-lg p-4 sm:p-6 rounded-xl shadow-md w-full">
          <textarea
            readOnly
            ref={outputRef}
            value={output}
            className="w-full h-48 sm:h-64 resize-none bg-transparent outline-none"
          />
        </div>
      </div>
    </div>
  );
}
