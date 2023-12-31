/* eslint-disable react/prop-types */
const ButtonComp = ({ count, setCount }) => {
  const handleCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>counter {count}</h1>
      <button onClick={handleCounter}>add</button>
    </div>
  );
};

export default ButtonComp;
