import React from "react";

function TakeContact(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.number}</p>
      <button onClick={handleClick}>DELETE</button>
      <button onClick={handleEdit}>EDIT</button>
    </div>
  );
}

export default TakeContact;