import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer"
    >
      <div>
        <img
          className="v-pic rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt="video banner"
        />
      </div>
      <div className="flex gap-4 mt-5">
        <img
          className="c-pic w-14 h-14 rounded-full"
          src={video.channelThumbnail[0].url}
          alt="channel picture"
        />
        <div>
          <h4 className="line-clamp-2 font-bold">{video.title} </h4>
          <p>{video.channelTitle} </p>
          <div className=" detail flex gap-2">
            <p>
              <span>{millify(video.viewCount)}</span>
              <span>Görüntülenme</span>
            </p>
            <p>{video.pulishedTimeText} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
