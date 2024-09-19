import React from "react";
import styles from "./style.module.css"

const ProjectBox = ({Image,title,des}) => {
  return (
    <div className={styles.project_item}>
      <div className={styles.project_image}>
      <img src={Image} alt=""/>
      </div>
      <div className={styles.project_content}>
         <p>{des}</p>
        <h4 className={styles.project_title}>{title}</h4>
      </div>
    </div>
  );
};

export default ProjectBox;
