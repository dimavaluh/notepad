import React from "react";
import NotesItem from "./NotesItem";

function NotesList(props) {
  return (
    <div>
      {props.notes.map((note) => {
        return <NotesItem key={note.id} note={note} />;
      })}
    </div>
  );
}

export default NotesList;
