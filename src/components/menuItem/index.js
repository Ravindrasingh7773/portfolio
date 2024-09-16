import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = ({ item }) => {
  return (
    <div className={styles.menu_item}>
      <NavLink to={"#"}>{item}</NavLink>
    </div>
  );
};

export default MenuItem;
