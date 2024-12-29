/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [msg, setMsg] = useState([""]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      setSocket(newSocket);
    };
    newSocket.onmessage = (message) => {
      console.log("Message received:", message);
      console.log("Message received:", message.data);
      setMsg((prev) => [...prev, message.data]);
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  


  // same logic will be there in next js as well only make sure to make this as client component
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => socket?.send(input)}>Send message</button>
      {msg.map((data) => {
        return <h1>{data} </h1>;
      })}
    </>
  );
}

export default App;
