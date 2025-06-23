import React from "react";
import styles from "./button.css";

export const Button = () => {
  console.log("styles object:", styles);
  console.log("styles keys:", Object.keys(styles));
  console.log("btn class:", styles.btn);
  return <div className={styles.btn}>Click me</div>;
};
