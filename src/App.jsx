import Button from "./Button";
import Card from "./Card"
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return(
    <>
      <Card />
      <Button/>
      <Student name="Mario" age={30} isStudent={false}/>
      <Student />
      <UserGreeting isLoggedIn={true}/>
    </>
  );
}

export default App
