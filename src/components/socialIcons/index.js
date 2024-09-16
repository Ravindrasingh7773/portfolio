import React from "react";
import styles from "./style.module.css" 
import { Link } from "react-router-dom";
import FacebookIcon from "../../icons/facebookIcon";
import LinkedInIcon from "../../icons/linkedInIcon";
import InstagramIcon from "../../icons/instagramIcon";
import TwitterIcon from "../../icons/twitterIcon";

const SocialIcons = () => {
  return (
    <> 
    <div className={styles.social_icons}>
        <Link href="#" className={styles.socialIcon}>
          <FacebookIcon />
        </Link>
        <Link href="#" className={styles.socialIcon}>
        <TwitterIcon />
        </Link>
        <Link href="#" className={styles.socialIcon}>
        <InstagramIcon />
        </Link>
        <Link href="#" className={styles.socialIcon}>
        <LinkedInIcon />
        </Link>  
    </div>
    </>
  );
};

export default SocialIcons;
