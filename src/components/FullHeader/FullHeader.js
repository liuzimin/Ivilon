import React from 'react';
import styles from './FullHeader.module.css';

const FullHeader = (props) => {

  return (
    <div className={styles.Background} id='Home'>
      <div className={styles.Logo}></div>

      <div className={styles.IconGroup}>
        <div className={styles.Facebook}></div>
        <div className={styles.Pintrest}></div>
        <div className={styles.Instagram}></div>
      </div>
    </div>
  )
}

export default FullHeader;