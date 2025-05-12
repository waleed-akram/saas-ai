import Link from "next/link";
import { FaComments, FaMagic } from "react-icons/fa";

export default function MainView() {
  return (
    <main className="min-h-screen -mt-15 flex flex-col items-center justify-center px-6 text-gray-800 bg-gray-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
        Welcome to Your Productivity Hub
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-2xl mb-12 text-gray-600">
        Streamline your workflow with two powerful tools designed to boost
        creativity and communication. Whether you're brainstorming ideas or
        holding a conversation with an AI, we've got you covered.
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
            Chat buddy
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-full sm:w-1/2 hover:shadow-xl transition">
          <FaMagic className="text-4xl text-purple-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Imagine</h2>
          <p className="text-gray-600 mb-4">
            Turn prompts into visual magic. Imagine lets you generate images
            from your ideas using AI. Perfect for design inspiration or creative
            fun.
          </p>
          <Link
            href="/response-section/secondTool"
            className="inline-block mt-2 text-white bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Imagine
          </Link>
        </div>
      </div>
    </main>
  );
}
