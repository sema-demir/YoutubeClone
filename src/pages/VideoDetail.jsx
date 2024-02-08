import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../Helpers/getData";
import ReactPlayer from "react-player";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../Components/StringArea";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  //arama parametresşne erişim için kurulum
  const [searchParams] = useSearchParams();

  //url den "v isimli parametreyi getir"

  const id = searchParams.get("v");

  //id si bilinene videonun bilgisini Api den al
  useEffect(() => {
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
  }, [searchParams]);

  return (
    <div className="detail-page h-screen overflow-hidden">
      {/* video içeriği */}
      <div>
        <ReactPlayer
          className={"rounded"}
          width={"100%"}
          height={"50vh"}
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        {!video ? (
          <p>Yükleniyor...</p>
        ) : (
          <>
            {/* //baslık */}
            <h1 className="my-3 text-left text-xl font-bol">{video.title}</h1>

            {/* kanal bilgileri */}
            <div className="flex justify-between">
              {/* sol */}
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={video.channelThumbnail[0].url}
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle} </h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                  Abone ol
                </button>
              </div>
              {/* sag  */}
              <div className="flex-items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-4 py-2 px-4 ">
                  <AiFillLike />
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>

            {/* video bilgileri */}
            <div
              className="bg-[#272727] rounded p-2 mt-4 cursor-pointer 
            hover:bg-opacity-80"
            >
              <div>
                <p>{millify(video.viewCount)} Görüntülenme </p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>
          </>
        )}
      </div>
      {/* ilgili videolar  */}
      <div></div>
    </div>
  );
};

export default VideoDetail;
