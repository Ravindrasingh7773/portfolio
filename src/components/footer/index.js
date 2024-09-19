import React, { Fragment } from "react";
import styles from "./style.module.css";
import Section from "../section";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../logo";
import MenuItem from "../menuItem";
import SocialIcons from "../socialIcons";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    id: 1,
    title: "Home",
    path: "/home",
  },
  {
    id: 2,
    title: "About Me",
    path: "/About Me",
  },
  {
    id: 3,
    title: "Services",
    path: "/Services",
  },
  {
    id: 4,
    title: "Projects",
    path: "/Projects",
  },
  {
    id: 5,
    title: "Testimonials",
    path: "/Testimonials",
  },
  {
    id: 6,
    title: "Contact",
    path: "/Contact",
  },
];

const Footer = () => {
  return (
    <Fragment>
      <Section pt={"110"} pb={"60"} customCss={styles.footer}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={styles.footer_top}>
                <Logo />
                <div className={styles.footer_nav}>
                  {MenuItems.map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
                </div>
                <SocialIcons />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <div className={styles.footer_bottom}>
        <div className={styles.fb_wrap}>
          © 2024 <Link to="/">Ravindra Singh</Link> All Rights Reserved , Inc.
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
