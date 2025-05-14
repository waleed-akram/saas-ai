import Link from "next/link";
import { RiRobot3Line } from "react-icons/ri";
import { FaComments, FaMagic } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="min-h-screen grid col-span-2 row-span-4 w-full breakpoints-sidebar pl-2 bg-gray-100">
      <div className="mt-10 text-4xl break-normal">
        <div className=" inline bg-white rounded-full mr-0.5">
          <RiRobot3Line
            className="inline mb-1 bg-blue-500 text-white p-1.5 rounded-full"
            size={40}
          />
        </div>
        <Link href="/" className="text-gray-700 ">
          SaaS AI
        </Link>
      </div>
      <div className="flex flex-col gap-1 px-1 -mt-50 mr-1.5">
        <span className="text-3xl p-1 ">~Our Tools~</span>
        <Link href="/response-section/firstTool" className="btn">
          <FaComments className="text-xl inline mr-2 text-white" />
          Chat buddy
        </Link>
        {/* <Link href="/response-section/secondTool" className="btn">
          <FaMagic className="text-xl inline mr-2 text-white" />
          Imagine
        </Link> */}
      </div>
    </div>
  );
}
