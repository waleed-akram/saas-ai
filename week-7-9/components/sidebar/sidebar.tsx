"use client";

import Link from "next/link";
import { RiRobot3Line } from "react-icons/ri";
import { FaComments, FaToolbox } from "react-icons/fa";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import { useEffect } from "react";
import { usePromptContext } from "../../app/context";

export default function SideBar() {
  const { toggleSidebar, updateToggleSidebar } = usePromptContext();

  useEffect(() => {
    const handleResize = () => {
      updateToggleSidebar(window.innerWidth >= 1024); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full w-80 sm-min-w-60 min-w-50 z-20 absolute animate p-4 bg-gray-100 flex flex-col gap-6 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <Link href="/">
            <RiRobot3Line className="bg-blue-500 text-white p-1 rounded-full" size={40} />
          </Link>
          <span className="text-xl font-semibold">SaaS AI</span>
        </div>
        <button onClick={() => updateToggleSidebar(!toggleSidebar)} className="cursor-pointer ">
          <TbLayoutSidebarFilled size={30}/>
        </button>
      </div>

      <div>
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <FaToolbox />
          <span className="text-lg font-medium">Our Tools</span>
        </div>

        <Link
          href="/response-section/firstTool"
          className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <FaComments />
          <span>Chat Buddy</span>
        </Link>

        <div className="text-sm text-gray-400 mt-4">More tools coming soon</div>
      </div>
    </div>
  );
}
