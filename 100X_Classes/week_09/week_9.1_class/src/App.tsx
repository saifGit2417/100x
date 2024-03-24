import React from "react";
import useTodo from "./customHook/UseTodos";
import useOnline from "./customHook/useOnline";
import usePointer from "./customHook/usePointer";
import useDimensions from "./customHook/useDimensions";

function App() {
  const { todo, loading } = useTodo(2000, 5);
  // done till 1:22 hr
  const isOnline = useOnline();
  const mousePosition = usePointer();
  const dimension = useDimensions();
  const { height, width } = dimension;

  return (
    <>
      <div>
        current window size <br />
        is height : {height}
        width : {width}
      </div>
      <div>
        your mouse position is {mousePosition.x} : {mousePosition.y}{" "}
      </div>
      {isOnline ? (
        <div>yay , you are online enjoy</div>
      ) : (
        <div>Please connect to internet</div>
      )}
      <>
        {loading ? (
          <div>........loading</div>
        ) : (
          <>
            {todo.map((todo) => (
              <Track todo={todo} />
            ))}
          </>
        )}
      </>
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
