const addToDo = () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const container = document.getElementById("container");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<p> ${title}</p>
                      <p>${description} </p>
                      <button>mark complete</button>
                      `;
  document.getElementById("container").appendChild(newDiv);
};
