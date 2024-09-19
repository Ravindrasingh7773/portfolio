import React from "react";
import styles from "./style.module.css"

const TestimonialBox = ({Image,name,position,quotes}) => {
  return (
   <div className="d-flex justify-content-center">
     <div className={styles.test_item}>
      <div className={styles.test_image}>
       <img src={Image} alt=""/>
      </div>
      <div className={styles.test_content}>
        <q>{quotes}</q>
         <h5 className={styles.test_name}>{name}</h5>
        <h4 className={styles.test_title}>{position}</h4>
      </div>
    </div>
   </div>
  );
};

export default TestimonialBox;
