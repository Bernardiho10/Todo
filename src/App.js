import { useState } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Model from "./component/Modal";
import Todo from "./component/Todo";

function App() {
  const [toggle, setToggle] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
      date: new Date(),
      priority: "High",
      description: "Learn React",
    },
    {
      id: 2,
      title: "Learn Redux",
      completed: false,
      date: new Date(),
      priority: "medium",
      description: "Learn Redux",
    },
    {
      id: 3,
      title: "Learn Node",
      completed: false,
      date: new Date(),
      priority: "Low",
      description: "Learn Node",
    },
  ]);

  const toggleModal = () => {
    console.log("showModal");
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {data.map((todo) => {
        return <Todo key={todo.id} todo={todo} toggleModal={toggleModal} />;
      })}
      {toggle && (
        <Model
          toggleModal={toggleModal}
          header={"Add a new Task"}
          btnText={"Add Todo"}
        >
          <AddTodo />
        </Model>
      )}
      <div className="add-todo">
        <button onClick={toggleModal}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
