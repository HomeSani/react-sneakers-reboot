import React from "react";

import classNames from "classnames";

import "./Button.scss";

function Button({ children, small, onClick }) {
  const btnClass = classNames({
    button: true,
    "button-small": small,
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
