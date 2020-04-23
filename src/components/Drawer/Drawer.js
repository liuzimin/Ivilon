import React from 'react';
import styles from './Drawer.module.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Drawer = (props) => {
  let attachedClasses = [styles.Drawer, styles.Close];
  if (props.isOpen) {
      attachedClasses = [styles.Drawer, styles.Open];
  }

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
      {props.isOpen ? <div className={styles.Background} onClick={props.closeDrawer}></div> : null}
      <div className={attachedClasses.join(' ')}>
        <div className={styles.ItemsGroup}>
          <NavLink scroll={el => scrollWithOffset(el, 300)} smooth onClick={props.closeDrawer} to={'/#Home'} exact>Home</NavLink>
          <NavLink scroll={el => scrollWithOffset(el, 200)} smooth onClick={props.closeDrawer} to={'/#OurCollection'}>Our Collection</NavLink>
          <NavLink scroll={el => scrollWithOffset(el, 0)} smooth onClick={props.closeDrawer} to={'/#AboutUs'}>About Us</NavLink>
          <NavLink scroll={el => scrollWithOffset(el, 0)} smooth onClick={props.closeDrawer} to={'/#ContactUs'}>Contact</NavLink>      
        </div>
      </div>
    </>
  )
}

export default Drawer;