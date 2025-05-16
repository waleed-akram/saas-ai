"use client";

import Link from "next/link";
import { RiRobot3Line } from "react-icons/ri";
import { FaComments, FaMagic, FaToolbox } from "react-icons/fa";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import { useEffect } from "react";
import { usePromptContext } from "../../app/context";

export default function SideBar() {
  const { toggleSidebar, updateToggleSidebar } = usePromptContext();
  useEffect(() => {
    if (window.innerWidth < 480) {
      updateToggleSidebar(false);
    }
  }, []);

  function handleToggle() {
    updateToggleSidebar(!toggleSidebar);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        updateToggleSidebar(false);
      } else {
        updateToggleSidebar(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {toggleSidebar ? (
        
        <div className="sidebar min-h-screen w-full breakpoints-sidebar pl-2 bg-gray-100 animate flex flex-col gap-90">
          <div className="mt-10 text-2xl md:text-4xl h-fit break-normal flex md:gap-3 gap-1">
            <div className="bg-white h-fit rounded-full outline:none">
              <Link href="/" className="outline:none">
                <RiRobot3Line
                  className="bg-blue-500 outline:none text-white px-1.5 rounded-full"
                  size={40}
                />
              </Link>
            </div>
            <Link href="/" className="text-gray-700 mx-0.5">
              SaaS AI
            </Link>
            <button
              className="ml-15 sm:ml-15 hover:cursor-pointer"
              onClick={handleToggle}
            >
              <TbLayoutSidebarFilled />
            </button>
          </div>
          <div className="flex flex-col gap-3 px-2 mr-1.5">
            <div className="flex gap-1 p-1">
              <FaToolbox className="text-xl sm:text-3xl" />
              <span className="text-xl sm:text-3xl">Our Tools</span>
            </div>
            <div className="flex p-1.5 hover:cursor-pointer gap-2 bg-blue-500 place-items-center hover:bg-blue-700 transition rounded-md">
              <FaComments className="text-md  sm:text-xl text-white" />
              <Link
                href="/response-section/firstTool"
                className="text-white font-semibold "
              >
                Chat buddy
              </Link>
            </div>
            <div className="unclickable text-gray-400 mx-auto">
              More tools coming soon
            </div>
            {/* <div className="flex p-1.5 gap-2 hover:cursor-pointer bg-purple-500 place-items-center hover:bg-purple-700 transition rounded-md">
          <FaMagic className="text-xl text-white" />
          <Link
            href="/response-section/secondTool"
            className="text-white font-semibold"
          >
            Imagine
          </Link>
        </div> */}
          </div>
        </div>
      ) : (
        <button
          className="inline m-0 text-4xl  sm:text-4xl fixed mt-10 animateR mx-3 hover:cursor-pointer"
          onClick={handleToggle}
        >
          <TbLayoutSidebarFilled />
        </button>
      )}
    </>
  );
}
