import React, { useState } from "react";
import DoneIcon from "@material-ui/icons/Done";

function AddNote({ onCreate }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      onCreate(title, body);
      setTitle("");
      setBody("");
    }
  }

  return (
    <form className='note-editor' onSubmit={submitHandler}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className='note-editor__title'
        placeholder='Title'
      />
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        className='note-editor__text'
        placeholder='Add some text here'
      ></textarea>
      <button className='note-editor__submit' type='submit'>
        <DoneIcon style={{ color: "#000" }} />
      </button>
    </form>
  );
}

export default AddNote;
