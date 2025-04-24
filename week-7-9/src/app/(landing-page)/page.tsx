import { Button } from "@/components/ui/button";

// let variable : String="To Get Rich ";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col gap-20 flex-nowrap place-items-left pl-10 cursor-default bg-[url(/bg_home.jpg)] bg-cover bg-norepeat bg-center"
      >
        <h2 className="text-6xl text-white align-center mt-20">SaaS AI</h2>
        <p className="rounded-lg bg-beige text-white w-52 px-2 py-1 align-center mb-10 ">
          To get started{" "}
          <i>
            <Button
              variant="ghost"
              className="w-auto bg-gradient-to-br from-blue-600 via-gray-200 hover:bg-gray-100 text-blue-700 hover:font-semibold hover:text-blue-700"
            >
              Click Here!
            </Button>
          </i>
        </p>
      </div>
      {/* <div className="mx-auto text-center bg-gray-500">
        <p className="text-white hover:text-black cursor-default">Hi There</p>
      </div> */}
    </>
  );
}
