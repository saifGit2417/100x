let showData = document.getElementById("showData");
const handleGetData = async () => {
  // .then .catch method

  //   fetch("https://dummyjson.com/users").then((res) =>
  //     res.json().then((data) => console.log(data.users))
  //   );

  //   asybc await method
  const apiCall = await fetch("https://dummyjson.com/users");
  const result = await apiCall.json();
  //   console.log("result: ", result.users[0]);
  document.getElementById("showData").innerHTML = JSON.stringify(result.data);
};

// handleGetData();
