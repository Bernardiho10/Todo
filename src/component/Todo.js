import React from "react";
import "./Todo.css";

export default function Todo({ toggleModal, todo }) {
  return (
    <div>
      <div className="container">
        <ul className="todo-list">
          <li>
            <input type="checkbox" />
            <span>{todo.title}</span>
            <button className="edit-button">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
