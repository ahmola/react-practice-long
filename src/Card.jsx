import marioPicture from './assets/mario.jpeg'

export default function Card() {
  return (
    <div className="card">
        <img className="card-image"
        alt="profile picture"
        src={marioPicture}
        ></img>
        <h2 className="card-title">Mario</h2>
        <p className="card-text">From SuperMarioBrothers</p>
    </div>
  );
}
