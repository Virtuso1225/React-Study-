import React, { useState } from "react";
import styles from "./SearchModule.module.css";

const SearchModule = () => {
  const [name, setName] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.textBox}>
      <input
        className={styles.input}
        value={name}
        placeholder="Search"
        onChange={onChangeName}
      />
    </div>
  );
};
export default SearchModule;
