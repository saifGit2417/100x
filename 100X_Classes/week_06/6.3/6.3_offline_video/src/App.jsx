/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Child from "./Child";
import { v4 as uuid } from "uuid";
import "./App.css";

const App = () => {
  const [todo, setToDo] = useState([]);
  console.log("todo: ", todo);
  const [input, setInput] = useState({
    id: uuid().slice(0, 5),
    title: "",
    description: "",
    isCompleted: false,
  });
  const [pageUpdate, setPageUpdated] = useState(false);

  const handleMarkComplete = (id) => {
    todo.filter((data) => data.id === id)[0]["isCompleted"] = true;
    setPageUpdated(!pageUpdate);
  };

  const handleAddToDo = () => {
    if (input.title.length > 0 && input.description.length > 0) {
      setToDo((prev) => [...prev, input]);
      setInput({ id: null, title: "", description: "", isCompleted: false });
    } else {
      alert("please fill the details");
    }
  };
  useEffect(() => {}, [pageUpdate, todo]);
  const completedTask = todo.filter((data) => data.isCompleted === true).length;
  const pendingTask = todo.length - completedTask;

  return (
    <div>
      <h1> completed Task {completedTask > 0 ? completedTask : 0} </h1>
      <h1> Pending Task {pendingTask > 0 ? pendingTask : 0} </h1>
      <div>
        <input
          type="text"
          placeholder="title"
          value={input.title}
          onChange={(e) => {
            setInput((pre) => ({ ...pre, title: e.target.value }));
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="description"
          value={input.description}
          onChange={(e) => {
            setInput((pre) => ({ ...pre, description: e.target.value }));
          }}
        />
        <br />
        <br />
        <button onClick={handleAddToDo} className="button">
          add to do{" "}
        </button>
      </div>

      {todo.map((data) => {
        return (
          <div>
            <p className={`${data.isCompleted && "completedTask"}`}>
              {data.title}{" "}
            </p>
            <p className={`${data.isCompleted && "completedTask"}`}>
              {data.description}{" "}
            </p>
            <button
              onClick={() => handleMarkComplete(data.id)}
              className={`button ${data.isCompleted && "completed"}`}
            >
              {" "}
              {data.isCompleted ? "COMPLETED" : "MARK COMPLETED"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
