import React from "react";
import styles from "./style.module.css";

const Section = ({ bgColor, pt, pb, bgImg, children, customCss ,Ref }) => {
  return (
    <div
      className={`${styles.section} ${styles[bgColor]} ${styles["pb-" + pb]} ${
        styles["pt-" + pt]
      } ${bgImg ? styles.bgImage : ""} ${customCss}`}
      style={bgImg ? { backgroundImage: `url(${bgImg})` } : {}}
      ref={Ref}
    >
      {children}
    </div>
  );
};

export default Section;
