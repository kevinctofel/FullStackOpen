/* eslint-disable react/jsx-key */
import { useState } from "react";
import Name from "./components/Name";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    console.log(persons, persons.includes({ name: newName }));
    const personObject = {
      name: newName,
    };
    let names = persons.map((obj) => obj.name);
    let nameSet = new Set(names);
    const hasDuplicateNames = nameSet.size < persons.length;

    if (hasDuplicateNames) {
      alert(`${newName} is already added to Phonebook`);
      console.log("Duplicate name!");
      setNewName("");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">Add name</button>
        </div>
      </form>
      {/* debugging output */}
      <div>
        <p>debug: {newName}</p>
      </div>
      <h2>Numbers</h2>

      <div>
        {persons.map((person) => (
          <Name key={person.name} name={person.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
