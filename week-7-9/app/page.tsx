import { FaArrowLeft } from "react-icons/fa";

export default function MainView() {
  return (
    <div className="text-center mx-auto mt-80">
      <span className="text-6xl font-bold">
        To get Started...
        <span className="mt-5 block">
          Select a Tool from the
          <u className="block mt-5">
            
            <FaArrowLeft className="inline" />
            <i>SideBar!</i>
          </u>
        </span>
      </span>
    </div>
  );
}
