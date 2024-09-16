import React from "react";
import styles from "./styles.module.css";
import Logo from "../logo";
import MenuItem from "../menuItem";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";

const menuItems = [
  {
    item: "Home",
  },
  {
    item: "About Me",
  },
  {
    item: "Services",
  },
  {
    item: "Projects",
  },
  {
    item: "Testimonials",
  },
  {
    item: "Contact",
  },
];

const Navbar = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className={styles.navbar}>
            <div className={styles.nav_logo}>
              <Logo />
            </div>
            <div className={styles.nav_items}>
              {menuItems.map((value, index) => (
                <MenuItem key={index} item={value.item} />
              ))} 
              
            <Button text={"Download Cv"} size={"medium"} type={"fill"} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
