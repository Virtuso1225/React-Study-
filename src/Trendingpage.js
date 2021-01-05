import React from "react";
import styles from "./Trendingpage.module.css";
import className from "classnames/bind";

const s = className.bind(styles);

const Trendingpage = () => {
  return (
    <ul className={s("list")}>
      <div className={s("title")}>Currently trending pages</div>
      <li className={s("item")}>
        <div className={s("info")}>
          <div className={s("user")}>User</div>
          <div className={s("content")}>content</div>
        </div>
      </li>
      <li className={s("item")}>
        <div className={s("info")}>
          <div className={s("user")}>User</div>
          <div className={s("content")}>content</div>
        </div>
      </li>
      <li className={s("item")}>
        <div className={s("info")}>
          <div className={s("user")}>User</div>
          <div className={s("content")}>content</div>
        </div>
      </li>
    </ul>
  );
};
export default Trendingpage;
