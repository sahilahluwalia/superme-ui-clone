import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full px-4 flex items-center justify-between">
      <div className="flex justify-between items-center gap-10 w-full">
        <h2 className="font-bold text-2xl text-gray-900">SuperMe</h2>
        <div className="flex items-center gap-2   py-2 px-3 border w-full max-w-3xl bg-[#EFEAE0] border-gray-300 rounded-full">
          <FaSearch className="text-gray-600" />
          <input
            type="text"
            className="outline-none text-gray-600 ml-3 w-full"
            placeholder="Ask anything"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:bg-[#EFEAE0] text-gray-800 font-bold px-5 py-1.5 rounded-full text-sm  cursor-pointer">
            Login
          </button>
          <button className="bg-black text-white font-bold px-5 py-1.5 rounded-full text-sm hover:bg-gray-800 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
