const VideoCard = ({ video }) => {
  return (
    <div>
      <div>
        <img src={video.thumbnail[video.thumbnail.length - 1].url}  />
      </div>
      <div>
        <img src="" />
        <div>
            <h4></h4>
            <p></p>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
