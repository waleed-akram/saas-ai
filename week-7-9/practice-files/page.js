"use client";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  function updateCounter(value) {
    setCounter(counter + value);
  }

  return (
    <div className="bg-white text-center pt-10">
      <div className="grid grid-cols-4 gap-1 bg-white place-items-center w-fit mx-auto p-10">
        <button
          className="cursor-pointer grid bg-red-500 hover:bg-red-800 p-5 rounded-lg text-white"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset Counter
        </button>
        <p className="cursor-default grid col-span-3 bg-gray-500 text-white rounded-md w-full mx-auto px-10 py-5 shadow-lg">
          Sum : {counter}
        </p>
        <div
          className="common-div-style col-span-4"
          onClick={() => updateCounter(1)}
        >
          1
        </div>
        <div
          className="common-div-style col-span-3"
          onClick={() => updateCounter(2)}
        >
          2
        </div>
        <div className="common-div-style " onClick={() => updateCounter(3)}>
          3
        </div>
        <div className="common-div-style " onClick={() => updateCounter(4)}>
          4
        </div>
        <div
          className="common-div-style col-span-3"
          onClick={() => updateCounter(5)}
        >
          5
        </div>
        <div
          className="common-div-style col-span-3"
          onClick={() => updateCounter(6)}
        >
          6
        </div>
        <div className="common-div-style " onClick={() => updateCounter(7)}>
          7
        </div>
        <div className="common-div-style " onClick={() => updateCounter(8)}>
          8
        </div>
        <div
          className="common-div-style col-span-3"
          onClick={() => updateCounter(9)}
        >
          9
        </div>
      </div>
    </div>
  );
}
