/* eslint-disable react/jsx-key */
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
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
          {/* name: <input /> */}
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
          <p>key={person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
