import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/status";
function App() {
  const personName = {
    first: "Jordon",
    last: "Smith",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wyne",
    },
    {
      first: "Micheal",
      last: "B. Jordon",
    },
    {
      first: "Clark",
      last: "Steven",
    },
  ];

  const status = "error";

  return (
    <div className="App">
      <Greet name="Jordon" messageCount={40} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={status} />
      <Oscar>
        <Heading>Oscar Goes to Micheal B. Jordon</Heading>
      </Oscar>
    </div>
  );
}

export default App;
