import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  //form gönderme işlemi
  const handleSubmit = (e) => {
    e.preventDefault();
    //kullanıcıyı arama sonucları sayfasına yönlendirmek içinburadaki text i kullanacagız
    const text = e.target[0].value;

    //searchquery arama parametresi olarak girmiş
    //kullanıcıyı sonuçlar sayfasına yönlendirmek için aratılan terimi ekle
    navigate(`/results?search_query= ${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/youtube.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border overflow-hidden border-gray-400 rounded-[20px] "
      >
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
