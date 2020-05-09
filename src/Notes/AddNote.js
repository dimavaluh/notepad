import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function AddNote({ onCreate }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (title.trim() && text.trim()) {
      onCreate(title, text);
      setTitle("");
    }
  }
  return (
    <form className='note-editor' onSubmit={submitHandler}>
      <input
        title={title}
        onChange={(event) => setTitle(event.target.value)}
        className='note-editor__title'
        placeholder='Title'
      />
      <textarea
        text={text}
        onChange={(event) => setText(event.target.value)}
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
