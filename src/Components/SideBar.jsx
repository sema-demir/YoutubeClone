import { useContext } from "react";
import { categories } from "./../Constants/index";
import { VideoContext } from "../Context/videoContext";

const SideBar = () => {
   const { selectedCategory, setSelectedCategory } = 
   useContext(VideoContext)

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item) => (
        <div  key={item.name} 
        onClick={()  => setSelectedCategory(item)}>
           
          <div
            className= {`${selectedCategory.name === item.name && 'bg-[#2b2a2a]'}
            flex items-center rounded-md 
            cursor-pointer gap-2 py-4 px-2 md:px-2 text-base 
            md:text-lg hover:bg-[#2d2d2d]`}
          > 
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {item.divider &&  <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
