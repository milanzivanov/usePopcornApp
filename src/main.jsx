/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         color="blue"
//         maxRating={10}
//         onSetRating={setMovieRating}
//       ></StarRating>
//       <p>This movie was rated {movieRating} starts</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "bad", "Okay", "Good", "Amazing"]}
    ></StarRating>
    <StarRating
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    ></StarRating>
    <Test></Test> */}
  </React.StrictMode>
);
