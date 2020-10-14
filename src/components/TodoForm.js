import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  //(props.edit ? props.edit.value : "") is used to change the text: Add into Update
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [counter, setCounter] = useState(0);

  //showing information in title bar
  const handleCounter = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    if (counter) {
      document.title = "Added todo";
    }
  });

  //use to focus the input means when page load then curser will be in input box
  const inputRef = useRef(null);
  // const inputRef1 = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    // When text is in input box
    if (input) {
      document.title = "Adding......";
    }
    // When click on update logo
    if (props.edit) {
      document.title = "Updating.....";
    }
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    //control submit form refresh
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
          <button onClick={handleCounter}>+</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
