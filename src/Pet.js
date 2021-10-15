import React from "react";

// export default function Pet({ name, animal, breed }) {
//   return React.createElement(
//     "div",
//     {},
//     [React.createElement("h1", {}, name)],
//     React.createElement("h2", {}, animal),
//     React.createElement("h3", {}, breed)
//   );
// }

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;
