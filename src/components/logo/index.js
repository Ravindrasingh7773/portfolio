import React from "react";
import styles from "./style.module.css";
import logoImg from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImg} alt='logo img' />
    </div>
  );
};

export default Logo;
