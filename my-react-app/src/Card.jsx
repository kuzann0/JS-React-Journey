import image from "./assets/image.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <h1>TITLE {new Date().getFullYear()}</h1>
      </div>
      <img className="card-image" src={image} alt="an image is placed here" />
      <h2 className="card-title">Elvis Selisana</h2>
      <p className="card-text">I craft authentic designs.</p>
      <div className="card-button-container">
        <button className="card-button">More Details</button>
      </div>
    </div>
  );
}

export default Card;
