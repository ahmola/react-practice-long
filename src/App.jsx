import MyComponent from "./MyComponent";
import Button from "./Button";
import Card from "./Card"
import ClickEvent from "./ClickEvent";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import Counter from "./Counter";
import MyComponents from "./MyComponents";
import ColorPicker from "./ColorPicker";
import UpdateObjects from "./UpdateObjects";
import UpdateArrays from "./UpdateArrays";
import UpdateArrayOfObject from "./UpdateArrayOfObject";

function App() {
  const fruits = 
  [{id:1, name: "apple", calories: 95},
  {id:2, name: "banana", calories: 45},
   {id:3, name: "coconut", calories: 105},
    {id:4, name: "orange", calories: 159},
     {id:5, name: "pineapple", calories: 37}];

     const vegetables = 
     [{id:1, name: "potatoe", calories: 110},
     {id:2, name: "celery", calories: 15},
      {id:3, name: "carrot", calories: 25},
       {id:4, name: "corn", calories: 63},
        {id:5, name: "broccoli", calories: 50}];


  return(
    <>
      <Card />
      <Button/>
      <Student name="Mario" age={30} isStudent={false}/>
      <Student />
      <UserGreeting isLoggedIn={true}/>
      {fruits.length > 0 && <List items={fruits} category="Fruits" /> }
      {vegetables.length > 0 && <List items={vegetables} category="Vegetabels" /> }
      <ClickEvent />
      <ProfilePicture /> 
      <MyComponent />
      <Counter />
      <MyComponents/>
      <ColorPicker />
      <UpdateObjects />
      <UpdateArrays />
      <UpdateArrayOfObject />
    </>
  );
}

export default App
