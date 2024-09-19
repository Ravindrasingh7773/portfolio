// import React from "react";
// import styles from "./styles.module.css";
// import Logo from "../logo";
// import MenuItem from "../menuItem";
// import { Col, Container, Row } from "react-bootstrap";
// import Button from "../button";

// const menuItems = [
//   {
//     item: "Home",
//   },
//   {
//     item: "About Me",
//   },
//   {
//     item: "Services",
//   },
//   {
//     item: "Projects",
//   },
//   {
//     item: "Testimonials",
//   },
//   {
//     item: "Contact",
//   },
// ];

// const Navbar = () => {
//   return (
//     <Container>
//       <Row>
//         <Col lg={12}>
//           <div className={styles.navbar}>
//             <div className={styles.nav_logo}>
//               <Logo />
//             </div>
//             <div className={styles.nav_items}>
//               {menuItems.map((value, index) => (
//                 <MenuItem key={index} item={value.item} />
//               ))} 
//             <Button text={"Download Cv"} size={"medium"} type={"fill"} />
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Navbar;


// import React, { useState,useEffect } from "react";
// import styles from "./style.module.css";
// import Logo from "../logo";
// import MenuItem from "../menuItem";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// import { Link } from "react-router-dom";
// import { Col, Container, Row } from "react-bootstrap";
// import Button from "../button";

// const Navbar = () => {
//     const MenuItems = [
//         {
//             id: 1,
//             title: "Home",
//             path: "/home",
//         },
//         {
//             id: 2,
//             title: "About Me",
//             path: "/About Me",
//         },
//         {
//             id: 3,
//             title: "Services",
//             path: "/Services",
//         },
//         {
//             id: 4,
//             title: "Projects",
//             path: "/Projects",
//         },
//         {
//             id: 5,
//             title: "Testimonials",
//             path: "/Testimonials",
//         },
//         {
//             id: 6,
//             title: "Contact",
//             path: "/Contact",
//         },
//     ];
 

//     const [menuOpen, setMenuOpen] = useState(false);
//     const [isFixed, setIsFixed] = useState(false);
//     const [scrollPosition, setScrollPosition] = useState(0); 

//     const handleMenuToggle = () => {
//         setMenuOpen(!menuOpen);
//     }; 
//     useEffect(() => {
//         AOS.init({
//           duration: 1000, // Customize duration in milliseconds
//           once: true, // Whether animation should happen only once
//         });
//       }, []);
//       useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 200) {
//                 let intervalId = setInterval(() => {
//                     setScrollPosition((prev) => {
//                         // Smoothly update scroll position until the threshold is reached
//                         if (prev < 200) return prev + 20;
//                         clearInterval(intervalId);
//                         setIsFixed(true);
//                         return prev;
//                     });
//                 }, 200); // Gradually increase scroll position every 100ms
//             } else {
//                 setScrollPosition(0);
//                 setIsFixed(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
 
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//     return (
//         <div  className={`${styles.header_navbar} ${isFixed ? styles.fixed : ''}`}  data-aos="fade-down">
//             <Container>
//                 <Row className="align-items-center">
//                     <Col lg={12}>
//                         <div className={styles.hn_wrap}>
//                             <Logo />
//                             <div
//                                 className={`${styles.menubar} ${menuOpen ? styles.menuOpen : ""}`}
//                             >
//                                 {MenuItems.map((item, index) => (
//                                     <MenuItem key={index} item={item} />
//                                 ))}
//                                  <div className={styles.nav_btn}>
//                                 <Button type={"fill"} size={"medium"} text={"Download CV"} />
//                             </div>
//                             </div>
                           
//                             <button className={styles.menu_toggle} onClick={handleMenuToggle}>
//                                 ☰
//                             </button>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Logo from "../logo";
import MenuItem from "../menuItem";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";
import Headroom from "react-headroom";

const Navbar = () => {
    const MenuItems = [
        { id: 1, title: "Home", path: "/home" },
        { id: 2, title: "About Me", path: "/About Me" },
        { id: 3, title: "Services", path: "/Services" },
        { id: 4, title: "Projects", path: "/Projects" },
        { id: 5, title: "Testimonials", path: "/Testimonials" },
        { id: 6, title: "Contact", path: "/Contact" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false); // To track if the navbar is fixed

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });
    }, []); 

    return (
        <Headroom>
        <div className={`${styles.header_navbar} `} data-aos="fade-down">
            <Container>
                <Row className="align-items-center">
                    <Col lg={12}>
                        <div className={styles.hn_wrap}>
                            <Logo />
                            <div
                                className={`${styles.menubar} ${menuOpen ? styles.menuOpen : ""}`}
                            >
                                {MenuItems.map((item, index) => (
                                    <MenuItem key={index} item={item} />
                                ))}
                                <div className={styles.nav_btn}>
                                    <Button type={"fill"} size={"medium"} text={"Download CV"} />
                                </div>
                            </div>

                            <button className={styles.menu_toggle} onClick={handleMenuToggle}>
                                ☰
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
            </Headroom>
    );
};

export default Navbar;
