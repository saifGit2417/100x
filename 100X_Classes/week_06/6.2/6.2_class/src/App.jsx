/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import axios from "axios";
// import { useEffect, useState } from "react";
// // import Todo from "./ToDo";

// function App() {
//   const [id, setId] = useState(1);
//   const btnId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   return (
//     <div>
//       <button onClick={() => setId(Math.ceil(Math.random() * 10))}>
//         change id
//       </button>
//       <br />
//       {btnId.map((data) => {
//         return (
//           <>
//             <button
//               onClick={() => {
//                 setId(data);
//               }}
//             >
//               {data}{" "}
//             </button>
//             <br />
//           </>
//         );
//       })}
//       <button onClick={() => setId(1)}>1</button>
//       <button onClick={() => setId(2)}>2</button>
//       <button onClick={() => setId(3)}>3</button>
//       <button onClick={() => setId(4)}>4</button>
//       <button onClick={() => setId(5)}>5</button>

//       <Todo id={id} />
//     </div>
//   );
// }
// function Todo({ id }) {
//   const [todo, setTodo] = useState({});
//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then((res) => setTodo(res.data.todo))
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }
// export default App;

// import React, { useMemo, useState } from "react";

// const App = () => {
//   const [num, setNum] = useState();
//   const [counter, setCounter] = useState(0);
//   let sum = useMemo(() => {
//     let sumIs = 0;
//     for (let i = 0; i <= num; i++) {
//       sumIs += i;
//     }
//     return sumIs;
//   }, [num]);
//   return (
//     <div>
//       <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
//       <p>sum is {sum} </p>
//       <button onClick={() => setCounter(counter + 1)}>
//         counter is {counter}{" "}
//       </button>
//     </div>
//   );
// };

// export default App;


import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
