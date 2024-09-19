import React from "react";
import styles from "./style.module.css" 
import { Link } from "react-router-dom";
import FacebookIcon from "../../icons/facebookIcon";
import LinkedInIcon from "../../icons/linkedInIcon";
import InstagramIcon from "../../icons/instagramIcon";
import TwitterIcon from "../../icons/twitterIcon";
import SkypeIcon from "../../icons/skypeIcon";
import GmailIcon from "../../icons/emailIcon";

const SocialIcons = () => {
  return (
    <> 
    <div className={styles.social_icons} >
      <Link target="_blank" to="mailto:nareshprajapat77269@gmail.com" className={styles.socialIcon}   data-aos="fade-up">
          <GmailIcon />
        </Link>
        <Link target="_blank" to="#" className={styles.socialIcon}  data-aos="fade-up"  data-aos-delay="300">
          <FacebookIcon />
        </Link>
        <Link target="_blank" to="https://twitter.com/_rathoresaa7773" className={styles.socialIcon}  data-aos="fade-up"  data-aos-delay="400">
        <TwitterIcon />
        </Link>
        <Link target="_blank" to="https://instagram.com/_ravsarathore7773" className={styles.socialIcon}  data-aos="fade-up"  data-aos-delay="500">
        <InstagramIcon />
        </Link>
        <Link target="_blank" to="https://linkedin.com/in/ravindra-singh-9b811528b" className={styles.socialIcon}  data-aos="fade-up"  data-aos-delay="600">
        <LinkedInIcon />
        </Link>  
        <Link target="_blank" to="https://join.skype.com/invite/pnDdcAU5IoMo" className={styles.socialIcon}  data-aos="fade-up"  data-aos-delay="700">
        <SkypeIcon />
        </Link>  
    </div>
    </>
  );
};

export default SocialIcons;
