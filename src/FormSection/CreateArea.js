import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    name: "",
    email: "",
    number: "",
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
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
