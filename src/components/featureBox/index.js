import React from "react";
import styles from "./style.module.css"

const FeatureBox = ({Icon,title,des}) => {
  return (
    <div className={styles.features_item}>
      <div className={styles.features_icon}>
       <img src={Icon} alt=""/>
      </div>
      <div className={styles.features_content}>
        <h4 className={styles.features_title}>{title}</h4>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
