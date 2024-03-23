import axios from "axios";
import { useEffect, useState } from "react";

const UseTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => setTodos(res?.data?.todos))
      .catch((err) => console.log(err));
  }, []);
  return todos;
};

export default UseTodos;
