import { useSearchParams } from "react-router-dom";
import SideBar from "../Components/SideBar";
import { useEffect, useState } from "react";
import { getData } from "../Helpers/getData";
import VideoCard from "../Components/VideoCard";
import Loader from "../Components/Loader";

const SearchResult = () => {
  const [results, setResults] = useState(null);
  //url den artılan terimi al
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  //console.log(query)
  //API den aratılan terime uygyn videoları al
  useEffect(() => {
    getData(`/search?query=${query}&type=video`).then((res) => setResults(res));
  }, [searchParams]); //her yeni kelime aratıldıgında bağimlılık dizisine arama parametresi verdik
  return (
    <div className="flex">
      <SideBar />
      <div className="flex items-center gap-10 flex-col flex-1 px-4 h-screen overflow-auto">
        <div className="flex gap-10 flex-col max-w-[1000px]">
          <p className="flex gap-2 text-lg">
            <span className="font-bold">{query} </span>
            <span>için sonuçlar</span>
          </p>
          {/* //eğer sonuclar gelmediyse loader basalım */}
          {!results ? (
            <Loader />
          ) : (
            results.data.map(
              (item) =>
                item.type === "video" && (
                  <VideoCard key={item.videoId} video={item} isRow={true} />
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
