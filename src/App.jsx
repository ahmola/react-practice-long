import Button from "./Button";
import Card from "./Card"
import Student from "./Student";

function App() {
  return(
    <>
      <Card />
      <Button/>
      <Student name="Mario" age={30} isStudent={false}/>
      <Student name="Louise" age={29} isStudent={true}/>
      <Student />
    </>
  );
}

export default App
