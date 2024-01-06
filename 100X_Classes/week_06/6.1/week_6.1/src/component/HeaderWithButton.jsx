import { useState } from "react";
import Header from "./Header";

const HeaderWithButton = () => {
  const [name, setName] = useState("saif");
  const handleChangeName = () => {
    setName(Math.ceil(Math.random() * 9));
  };
  return (
    <div>
      <button onClick={handleChangeName}>click me to change title</button>
      <Header title={`my name is ${name}`} />
    </div>
  );
};

export default HeaderWithButton;
