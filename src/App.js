import React from "react";
import NotesList from "./Notes/NotesList";
import Context from "./context";
import AddNote from "./Notes/AddNote";

import "normalize.css";
import "./App.scss";

function App() {
  const [notes, setNotes] = React.useState([
    { id: 1, title: "Some title 1", text: "Some text 1", date: 1589052641406 },
    { id: 2, title: "Some title 2", text: "Some text 2", date: 1589052641406 },
    { id: 3, title: "Some title 3", text: "Some text 3", date: 1589052641406 },
  ]);

  function addNote(title, text) {
    setNotes(
      notes.concat([
        {
          id: Date.now(),
          title,
          text,
          date: Date.now(),
        },
      ])
    );
  }

  function removeNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <Context.Provider value={{ removeNote }}>
      <div className='notepad'>
        <h1>Notepad</h1>
        <AddNote onCreate={addNote} />
        {notes.length ? <NotesList notes={notes} /> : <p>No notes yet</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
