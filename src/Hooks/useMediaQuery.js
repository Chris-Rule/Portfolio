import { useState, useEffect } from "react";

const useMediaQuery = (queryString) => {
  const mql = window.matchMedia(queryString);
  const [matches, setMatches] = useState(mql.matches);

  const changeHandler = (e) => {
    setMatches(e.matches);
  };

  useEffect(() => {
    mql.addEventListener("change", changeHandler);
    return () => mql.removeEventListener("change", changeHandler);
  }, [mql]);

  return matches;
};

export default useMediaQuery;
