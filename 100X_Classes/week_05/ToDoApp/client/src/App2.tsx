import { useRef } from "react";

const App2 = () => {
  const textRef = useRef(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(textRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={textRef} onChange={handleChange} />
    </div>
  );
};

export default App2;
