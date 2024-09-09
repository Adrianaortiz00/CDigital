import "./card.scss"


const DetaisCard = ({description, video, title}) => {
  return (
    <div className="cardContainer">
      <div className="contentContainer">
        <video className="video" src={video} alt={title} /> 
        <h3 className="description">{description}</h3>
        <h1></h1>
      </div>
    </div>
  );
};

export default DetaisCard;
//los videos van a esatr en formato de .mp4