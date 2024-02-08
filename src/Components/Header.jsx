import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>
      <form className="flex items-center border overflow-hidden border-gray-400 rounded-[20px] ">
        <input
          className="bg-black text-white outline-none px-3 py-1 text-black"
          type="search"
        />
        <button className="border-l px-2 text-xl ">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[400ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[400ms]" />
      </div>
    </div>
  );
};

export default Header;
