import { useState } from "react";
import ButtonComp from "./ButtonComp";
import ToDo from "./ToDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonComp count={count} setCount={setCount} />
      <ToDo />
    </>
  );
}

export default App;
