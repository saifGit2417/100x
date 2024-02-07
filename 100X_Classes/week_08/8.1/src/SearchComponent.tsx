import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    let debounce = setTimeout(() => {
      axios
        .get(`https://demo.dataverse.org/api/search?q=${input}`)
        .then((res) => console.log(res))
        .catch((Err) => console.log(Err));
    }, 2000);
    return () => {
      clearTimeout(debounce);
    };
  }, [input]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchComponent;
