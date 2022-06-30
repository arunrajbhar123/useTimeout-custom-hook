import React from "react";
import { useState, useEffect } from "react";

const useTimeout = (delay) => {
  const [ready, setReday] = useState(false);
  useEffect(() => {
    let CurrentId = setTimeout(() => {
      setReday(true);
    }, delay);

    return () => {
      clearTimeout(CurrentId);
    };
  }, [delay]);

  return { ready };
};

export default useTimeout;
