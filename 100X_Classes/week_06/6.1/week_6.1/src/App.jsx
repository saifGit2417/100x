/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [todo, setToDo] = useState([]);
  useEffect(() => {
    setInterval(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => setToDo(res.data.todos))
      .catch((err) => console.log(err));
    }, 3000);
  }, []);
  return (
    <div>
      {todo.map((data) => {
        return (
          <div
            style={{ padding: "10px", margin: "20px", border: "2px solid red" }}
            key={data.id}
          >
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
