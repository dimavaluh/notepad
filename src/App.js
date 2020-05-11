import React, { useEffect } from "react";
import NotesList from "./Notes/NotesList";
import Context from "./context";
import AddNote from "./Notes/AddNote";

import "normalize.css";
import "./App.scss";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        setNotes(res.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function addNote(title, body) {
    const newNote = {
      id: Date.now(),
      title,
      body,
      date: Date.now(),
    };
    setNotes(notes.concat([newNote]));
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  function removeNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <Context.Provider value={{ removeNote }}>
      <div className='notepad'>
        <h1>Notepad</h1>
        <AddNote onCreate={addNote} />
        {notes.length ? (
          <NotesList notes={notes} />
        ) : loading ? (
          <p>Loading</p>
        ) : (
          <p>No notes yet</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
