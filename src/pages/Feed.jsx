import { useContext } from "react";
import SideBar from "../Components/SideBar";
import { VideoContext } from "../Context/videoContext";
import VideoCard from "../Components/VideoCard";
import Loader from "../Components/Loader";

const Feed = () => {
  const { videos } = useContext(VideoContext);
  return (
    <div className="flex ">
      <SideBar />
      <div className="videos">
        {!videos ? (
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
