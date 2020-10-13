import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  //(props.edit ? props.edit.value : "") is used to change the text: Add into Update
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //use to focus the input means when page load then curser will be in input box
  const inputRef = useRef(null);
  // const inputRef1 = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    // When text is in input box
    if (input) {
      document.title = "Adding todo";
    }
    // When click on update logo
    if (props.edit) {
      document.title = "Updating todo";
    }
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
    <form className="todo-appForm" onSubmit={handleSubmit}>
      {/* props.edit ? is used to change the text: Add into update */}
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update text here"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button>Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Write your todo here"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button>+</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
