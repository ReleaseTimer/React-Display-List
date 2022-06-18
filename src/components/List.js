import React from "react";

export default function List(prop) {
  console.log(prop);

  return (
    <div className="listname">
      <h1>{prop.item}</h1>
    </div>
  );
}
