import { useContext } from "react";
import SideBar from "../Components/SideBar";
import { VideoContext } from "../Context/videoContext";
import VideoCard from "../Components/VideoCard";

const Feed = () => {
  const { videos } = useContext(VideoContext);
  return (
    <div className="flex gap-4 ">
      <SideBar />
      <div className="videos">
        {!true ? (
          <Loader />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
