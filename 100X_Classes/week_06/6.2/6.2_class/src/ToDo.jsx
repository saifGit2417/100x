/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

function Todo({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((res) => setTodo(res.data.todo))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default Todo;
