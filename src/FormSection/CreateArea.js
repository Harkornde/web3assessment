import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    id: props.id,
    name: props.note ? props.note.name : "",
    email: props.note ? props.note.email : "",
    number: props.note ? props.note.number : "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      id: null,
      name: "",
      email: "",
      number: "",
    });
    event.preventDefault();
  }

  function updateNote(event) {
    props.onUpdate(note);
    setNote({
      id: null,
      name: "",
      email: "",
      number: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="name"
          onChange={handleChange}
          value={note.name}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={note.email}
          placeholder="Email"
        />
        <input
          type="number"
          name="number"
          onChange={handleChange}
          value={note.number}
          placeholder="Phone number"
        />
        {props.note ? (
          <button onClick={updateNote}>Update</button>
        ) : (
          <button onClick={submitNote}>Add</button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
