const App = (props) => {
  const { notes } = props;
  console.log(props);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* {notes.map((note) => (
          <li>{note.content}</li>
        ))} */}
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
    </div>
  );
};

export default App;
