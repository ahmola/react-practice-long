export default function ProfilePicture() {
    const imageUrl = './src/assets/mario.jpeg';
  
    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl}></img>
  )
}
