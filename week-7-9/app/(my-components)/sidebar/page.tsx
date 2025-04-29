import Link from "next/link";

export default function SideBar() {
  return (
    <div className="grid col-span-2 row-span-4 w-full p-5 ">
      <div className="mx-auto w-full">
        <div className="bg-gradient-to-l from-pink-700 to-blue-500 rounded-lg">
          <h3 className="mt-20 text-white italic text-4xl mb-20 p-3 rounded-lg text-center break-normal">
            SaaS Tools
          </h3>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="/content/firstTool" className="btn">Text AI</Link>
          <Link href="/content/secondTool" className="btn">Image AI</Link>
          <Link href="/content/thirdTool" className="btn">Video AI</Link>
        </div>
      </div>
    </div>
  );
}
