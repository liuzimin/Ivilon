import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = (props) => {

  return (
    <div className={styles.Background} id='AboutUs'>
      <video autoPlay muted loop className={styles.Background}>
        <source className={styles.VideoSource} src='hhttps://video.wixstatic.com/video/11062b_fae1d456c92348a599ffb230a447bd1c/1080p/mp4/file.mp4' type='video/mp4'></source>

        <source className={styles.VideoSource} src='https://video.wixstatic.com/video/11062b_fae1d456c92348a599ffb230a447bd1c/1080p/mp4/file.mp4' type="video/ogg" />
        This Browser does not support HTML5 Videos
      </video>

      <div className={styles.Content}>
        <p className={styles.Heading}>ABOUT US</p>
        <p className={styles.SubHeading}>We are a reputed firm engaged in retailing and distributing a wide range of curtain rods.
          <br/>
          <br/>
          With our valuable experience of 15 years in the domain. These products are known for their superior Durability, easy installation and perfect finish, Which is suitable to be installed at commercial and domestic establishments. We manufacture these products using premium grade raw material as per the set industrial standards. Our range of  curtain rods enhances the beauty of interiors of households, hotels, offices, showroom and houses.</p>
      </div>
    </div>

  )
}

export default AboutUs;