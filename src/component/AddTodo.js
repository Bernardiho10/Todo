import React from "react";
import "./AddTodo.css";

export default function AddTodo() {
  const [priority, setPriority] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(priority, date, description, title);
    emptyForm();
  };

  const emptyForm = () => {
    console.log("Test empty form");
    setDate("");
    setDescription("");
    setTitle("");
    setPriority("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        <span>Title:</span>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="Enter Title"
          value={title}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          name="date"
          value={date}
        />
      </label>
      <label>
        <span>Description:</span>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="textarea"
          name="description"
          placeholder="Enter Description"
          value={description}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <button type="submit" className="btnTodo">
        Add Todo
      </button>
    </form>
  );
}
