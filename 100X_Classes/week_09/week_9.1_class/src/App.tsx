import React, { useEffect } from "react";
import { Component, ReactNode, useState } from "react";
import "./App.css";

function App() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMounted(false);
    }, 10000);
  }, []);
  return (
    <>
      <h1>say hi</h1>
      {mounted && <FunctionalComponent />}
      {/* <ClassComponent /> */}
    </>
  );
}

function FunctionalComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("component Mounted/updated");
    return () => {
      console.log("component un mounted");
    };
  }, [count]);
  return (
    <>
      <h1>{count} </h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}

// class ClassComponent extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { counter: 0 };
//   }
//   handleDecrement() {
//     this.setState({ counter: this.state.counter + 1 });
//   }

//   render(): ReactNode {
//     return (
//       <>
//         <h1>{this.state.counter} </h1>
//         <button onClick={this.handleDecrement}>Decrement</button>
//       </>
//     );
//   }
// }

export default App;
