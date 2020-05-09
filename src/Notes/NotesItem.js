import React, { useContext } from "react";
import Context from "../context";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

function NotesItem({ note }) {
  const { removeNote } = useContext(Context);
  return (
    <div className='single-note'>
      <div className='single-note__header'>
        <div className='single-note__title'>
          <p className='note-title'>{note.title}</p>
          <p className='note-date'>{note.date}</p>
        </div>
        <div className='single-note__controls'>
          <span onClick={() => console.log(note.id)}>
            <CreateIcon fontSize='small' />
          </span>
          <span onClick={removeNote.bind(null, note.id)}>
            <DeleteIcon fontSize='small' />
          </span>
        </div>
      </div>

      <p>{note.text}</p>
    </div>
  );
}

export default NotesItem;
