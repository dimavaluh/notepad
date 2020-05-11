import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

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
        <AddIcon style={{ color: "#fff" }} />
      </button>
    </form>
  );
}

export default AddNote;
