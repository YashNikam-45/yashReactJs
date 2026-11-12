import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    name:"Yash",
    rollno:"4088",
    college:"Agce"
    }

  return (
    <>
    <h1>Heyyy Yash.</h1>
    <Card channel="chai aur code" obj={myObj}/>
    <Card />
    <Card />
    <Card />
    </>
  );
}

export default App;
