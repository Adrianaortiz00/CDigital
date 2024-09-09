import Card from "../components/card/Card"

const Curs = ({ videos = [] }) => {
  return (
    <div className="curs">
      {videos.map((video) => (
        <Card
          key={video.id}
          id={video.id}
          title={video.title}
          description={video.description}
          video={video.video}
        />
      ))}
    </div>
  );
};

export default Curs;
