import Link from "next/link";
import { RiRobot3Line } from "react-icons/ri";
import { FaComments, FaMagic, FaToolbox } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="min-h-screen grid col-span-2 row-span-4 w-full breakpoints-sidebar pl-2 bg-gray-100">
      <div className="mt-10 text-4xl h-fit break-normal flex gap-3">
        <div className="bg-white h-fit rounded-full">
          <Link href="/">
            <RiRobot3Line
              className="bg-blue-500 text-white px-1.5 rounded-full"
              size={40}
            />
          </Link>
        </div>
        <Link href="/" className="text-gray-700 mx-0.5">
          SaaS AI
        </Link>
      </div>
      <div className="flex flex-col gap-3 px-2 -mt-50 mr-1.5">
        <div className="flex gap-1 p-1">
          <FaToolbox className="text-3xl" />
          <span className="text-3xl">Our Tools</span>
        </div>
        <div className="flex p-1.5 hover:cursor-pointer gap-2 bg-blue-500 place-items-center hover:bg-blue-700 transition rounded-md">
          <FaComments className="text-xl text-white" />
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
  );
}
