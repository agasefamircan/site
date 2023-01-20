import Link from "next/link";
import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import SocialIcon from "../Social/Social";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_sec}>
      <div className={styles.footer_main}>
        <div className={styles.footer_main_hr}></div>
        <div className={styles.footer_main_component}>
          <div className={styles.footer_left}>
            <h1>Agasef</h1>
            <p>
              I'm a software developer. I have a solid understanding of both
              front-end and back-end technologies and a good deal of experience
              developing web applications.
            </p>

            <div className={styles.footer_contact}>
              <Link href="mailto:gmail.com" target="_blank">
                <p>agasefemircanov@gmail.com</p>
              </Link>
              <SocialIcon />
            </div>
          </div>

          <div className={styles.footer_right}>
            <Link href="/">
              <p>Home</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
            <Link href="/projects">
              <p>Portfolio</p>
            </Link>
            <Link href="/blogs">
              <p>Blogs</p>
            </Link>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            {" "}
            <AiOutlineCopyright style={{ marginRight: "3px" }} /> Copyrights
            Agasef 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
