import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  //(props.edit ? props.edit.value : "") is used to change the text: Add into Update
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //use to focus the input means when page load then curser will be in input box
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    //control submit form
    e.preventDefault();
    // craete properties and random number untill 5000
    props.onSubmit({
      id: Math.floor(Math.random() * 5000),
      text: input,
    });
    //clear the form input
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {/* props.edit ? is used to change the text: Add into update */}
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update text here"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Write your todo here"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
