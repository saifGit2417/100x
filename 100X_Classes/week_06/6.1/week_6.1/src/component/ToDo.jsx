/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const ToDo = ({ task }) => {
 
  return (
    <div>
      {task.map((data) => {
        return (
          <div key={data.id}>
            <li>{data.id}</li>
            <li>{data.title}</li>
            <li>{data.description}</li>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ToDo;
