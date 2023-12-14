import React, { useState } from "react";
import "./App.css";
import Header from "./HeaderSection/Header";
import CreateArea from "./FormSection/CreateArea";
import TakeContact from "./TakeContact/TakeContact";

function App() {
  const [notes, setNotes] = useState([]);
  const [edit, setEdit] = useState(null);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function editNote(id) {
    const note = notes.find((noteItem, index) => index === id);
    setEdit(note);
  }

  function updateNote(newNote) {
    const index = notes.findIndex((noteItem) => noteItem.id === newNote.id);
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, i) => {
        if (i === index) {
          return newNote;
        } else {
          return noteItem;
        }
      });
    });
    setEdit(null);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea
        onAdd={addNote}
        onUpdate={updateNote}
        note={edit}
        id={edit ? edit.id : null}
      />
      {notes.map((noteItem, index) => {
        return (
          <TakeContact
            key={index}
            id={index}
            name={noteItem.name}
            email={noteItem.email}
            number={noteItem.number}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
    </div>
  );
}

export default App;
