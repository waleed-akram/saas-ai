import Link from "next/link";
import { FaComments, FaMagic } from "react-icons/fa";
import { RiRobot3Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

export default function MainView() {
  return (
    <main className="min-h-screen flex mt-10 flex-col items-center justify-center px-6 text-gray-800 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        SaaS AI <RiRobot3Line className="text-blue-500 inline sm:text-4xl mb-1 text-2xl"/>
      </h1>
      <h2 className="text-xl p-3 sm:text-3xl text-gray-600 font-bold text-center mb-4 ">
       <BsStars className="inline text-yellow-400"/> Welcome to Your Productivity Hub
      </h2>
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-12 text-gray-600">
        Streamline your workflow with two powerful tools designed to boost
        creativity and communication. Whether you&apos;re brainstorming ideas or
        holding a conversation with an AI, we&apos;ve got you covered.
      </p>

      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-full sm:w-1/2 hover:shadow-xl transition">
          <FaComments className="text-4xl text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Chat Buddy</h2>
          <p className="text-gray-600 mb-4">
            Your conversational companion. Ask questions, brainstorm ideas, or
            just chat. Chat Buddy is always here to assist you with quick and
            helpful responses.
          </p>
          <Link
            href="/response-section/firstTool"
            className="inline-block mt-2 text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Try out Chat buddy
          </Link>
        </div>

        <fieldset className="unclickable bg-white shadow-lg rounded-2xl w-full sm:w-1/2 hover:shadow-xl transition border-gray-100 border-1 mb-10 sm:mb-0">
          <div className="flex justify-center">
            <span className="text-xl sm:text-3xl  font-semibold absolute mt-30 sm:mt-25 text-gray-600 ">
              Coming Soon
            </span>
          </div>
          <div className="blur relative text-center p-6">
            <FaMagic className="text-4xl text-purple-500 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Imagine</h2>
            <p className="text-gray-600 mb-4">
              Turn prompts into visual magic. Imagine lets you generate images
              from your ideas using AI. Perfect for design inspiration or
              creative fun.
            </p>
            <Link
              href="/response-section/secondTool"
              className="inline-block mt-2 text-white bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition"
              aria-readonly
            >
              Try out Imagine
            </Link>
          </div>
        </fieldset>
      </div>
    </main>
  );
}
