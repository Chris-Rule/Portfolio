import { useState, useEffect } from "react";

const useMediaQuery = (queryString) => {
  let mql = window.matchMedia(queryString);
  const [matches, setMatches] = useState(mql.matches);

  const changeHandler = (e) => {
    setMatches(e.matches);
  };

  useEffect(() => {
    mql.addEventListener("change", changeHandler);
    return () => mql.removeEventListener("change", changeHandler);
  }, [matches]);

  return matches;
};

export default useMediaQuery;
