import React from "react";
import useTodo from "./customHook/UseTodos";

function App() {
  const { todo, loading } = useTodo(2000, 5);

  return (
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
