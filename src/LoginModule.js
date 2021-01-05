import React, { useState } from "react";
import styles from "./LoginModule.module.css";

const LoginModule = () => {
  // eslint-disable-next-line no-lone-blocks
  {
    /*const [current, setCurrent] = useState("button");

  const onMouseEnter = () => {
    setCurrent("enter");
  };

  const onMouseOver = () => {
    setCurrent("in");
  };*/
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <button className={styles.button}>Explore</button>
        <button className={styles.button}>About us</button>
      </div>
      <div>
        <button className={styles.button}>Sign in</button>
        <button className={styles.button}>Sign up</button>
      </div>
    </div>
  );
};
export default LoginModule;
