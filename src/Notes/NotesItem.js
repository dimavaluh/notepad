import React, { useContext } from "react";
import Context from "../context";
import CloseIcon from "@material-ui/icons/Close";

function NotesItem({ note }) {
  const { removeNote } = useContext(Context);
  const creationDate = () => {
    const newDate = new Date(note.date || 1589226866096);
    return `${newDate.getHours()}:${newDate.getMinutes()} ${newDate.getDate()}.${
      newDate.getMonth() + 1
    }.${newDate.getFullYear()}`;
  };

  return (
    <div className='single-note'>
      <div className='single-note__header'>
        <div className='single-note__title'>
          <p className='note-title'>{note.title}</p>
          <p className='note-date'>{creationDate()}</p>
        </div>
        <div className='single-note__controls'>
          <span onClick={removeNote.bind(null, note.id)}>
            <CloseIcon fontSize='small' />
          </span>
        </div>
      </div>

      <p>{note.body}</p>
    </div>
  );
}

export default NotesItem;
