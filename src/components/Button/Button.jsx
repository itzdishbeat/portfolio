import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.backgroundColor || "#1877F2",
    color: props.color || "#FFFFFF",
  };

  return (
    <button className={styles.button} style={buttonStyle}>
      {props.text}
    </button>
  );
};

export default Button;
