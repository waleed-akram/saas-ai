import { FaArrowRight } from "react-icons/fa";

export default function Prompts() {
  function PromptSection() {
    return (
      <div>
        <input className="bg-white box rounded-lg p-2 outline-none focus:ring-blue-500 focus:ring-2" type="text" placeholder="Type anything" />
        <button className="bg-gray-300 ml-2 cursor-pointer border-black border-1 rounded-lg p-1 m-auto"><FaArrowRight/></button>
      </div>
    );
  }

  return (
    <div className="grid col-span-6 row-span-1 border-1 border-black">
      <div className="m-auto">
        <PromptSection />
      </div>
    </div>
  );
}
