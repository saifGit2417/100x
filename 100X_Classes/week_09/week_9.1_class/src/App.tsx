import React, { useEffect, useState } from "react";
import useTodo from "./customHook/UseTodos";
import useOnline from "./customHook/useOnline";
import usePointer from "./customHook/usePointer";
import useDimensions from "./customHook/useDimensions";
import useCounter from "./customHook/useCounter";
import useDebounce from "./customHook/useDebounce";

function App() {
  const { todo, loading } = useTodo(2000, 5);
  const isOnline = useOnline();
  // const mousePosition = usePointer();
  const dimension = useDimensions();
  const { height, width } = dimension;
  const counter = useCounter();

  const [input, setInput] = useState("");

  const debounceResult = useDebounce(input, 3000);
  return (
    <>
      {/* useDebounce custom hook */}
      <h1>debounce value {debounceResult} </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* custom hook to return counter */}
      {/* <div>current counter value is {counter}</div> */}

      {/* custom hook to find display size */}
      {/* <div>
        current window size <br />
        is height : {height}
        width : {width}
      </div> */}

      {/* \<h1>mouse pointer position usePointer</h1>
      <div>
        \<h1>mouse pointer position usePointer</h1>
        your mouse position is {mousePosition.x} : {mousePosition.y}{" "}
      </div> */}

      {/* <h1>use online custom hook</h1> */}
      {/* <div>
        <h1>use online custom hook</h1>
        {isOnline ? (
          <div>yay , you are online enjoy</div>
        ) : (
          <div>Please connect to internet</div>
        )}
      </div> */}
      {/* 
      <h1>To do api call</h1>
      <div>
        <h1>To do api call</h1>
        {loading ? (
          <div>........loading</div>
        ) : (
          <>
            {todo.map((todo) => (
              <Track todo={todo} />
            ))}
          </>
        )}
      </div> */}
    </>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;
