import React, { useState } from "react";

function Nameitems(props) {
  const [isCanceled, setCancelState] = useState(false);
  function linethrough() {
    setCancelState(isCanceled ? false : true);
  }
  return (
    <li
      onClick={linethrough}
      style={{
        textDecoration: isCanceled ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {props.id + 1}. {props.name}
    </li>
  );
}

export default Nameitems;
