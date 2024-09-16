import React, { Fragment } from 'react';
import styles from './style.module.css';

const SectionHeading = ({des,title}) => {
  return (
    <Fragment> 
        <h2 className={styles.name}>{title} </h2> 
        <p className={styles.description}>
       {des}
        </p>  
      </Fragment>
  );
};

export default SectionHeading;
