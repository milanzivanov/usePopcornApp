/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  // classic way
  // useEffect(function () {
  //   inputElement.current.focus();
  // }, []);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputElement.current) {
          return;
        }

        if (e.code === "Enter") {
          inputElement.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}

export default Search;
