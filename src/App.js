import React, { useEffect, useState, useRef } from "react";
import NotesList from "./Notes/NotesList";
import Context from "./context";
import AddNote from "./Notes/AddNote";

import "normalize.css";
import "./App.scss";

function App() {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 11);
    }
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        setNotes(res.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => console.log(error));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
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
        <h1 className='notepad__name'>Notepad</h1>
        <div
          ref={ref}
          className={`note-editor-wrapper ${isSticky ? "sticky" : ""}`}
        >
          <AddNote onCreate={addNote} />
        </div>
        <div className='notes-list'>
          {notes.length ? (
            <NotesList notes={notes} />
          ) : loading ? (
            <p>Loading</p>
          ) : (
            <p>No notes yet</p>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
