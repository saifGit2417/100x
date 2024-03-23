import axios from "axios";
import { useEffect, useState } from "react";

const useTodo = (timer: number, howManyTimes: number) => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiCalled, setApiCalled] = useState(0);

  const callApi = () => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then((res) => {
        setTodo(res?.data?.todos);
        setLoading(false);
        setApiCalled((prev) => prev + 1);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const intervalFunction = setInterval(() => {
      if (apiCalled < howManyTimes) {
        callApi();
      } else {
        console.log("limits exceeded");
      }
    }, timer);
    return () => clearInterval(intervalFunction);
  }, [todo, apiCalled]);
  return { todo, loading };
};

export default useTodo;
