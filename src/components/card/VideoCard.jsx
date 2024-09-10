import "./videoCard.scss"


const VideoCard = ({ title, videoUrl, onClick }) => {
  return (
    <div className="video-card" onClick={onClick}>
      <h3>{title}</h3>
      <video width="50%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoCard;