export default function ClickEvent() {

    let count = 0;

    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} yeah!`);
        }
    }

    const handleOtherClick = (e) => e.target.textContent = "Yo!";


  return (
    <button onClick={(e) => handleOtherClick(e)}>Click Me</button>
  )
}
