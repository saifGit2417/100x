import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setISOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => setISOnline(true));
    window.addEventListener("offline", () => setISOnline(false));
  }, []);
  return isOnline;
};

export default useOnline;
