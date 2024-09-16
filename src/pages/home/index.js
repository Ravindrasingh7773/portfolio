import React from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import HsImg from "../../assets/images/hs-image.png";
import abtImg from "../../assets/images/about-image.png";
import { Col, Container, Row } from "react-bootstrap";
import SocialIcons from "../../components/socialIcons";
import Button from "../../components/button";
import SectionHeading from "../../components/sectionHeading";
import ProgressBar from 'react-bootstrap/ProgressBar';
import FeatureBox from "../../components/featureBox";
import Icon1 from "../../assets/images/service-image.png"; 

const ProgressData = [
    { label: 'UX', percentage: 90 },
    { label: 'Website Design', percentage: 85 },
    { label: 'App Design', percentage: 95 },
    { label: 'Graphic Design', percentage: 90 },
];

const FeatureData = [
    {
        title: 'UI/UX',
        description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
        // icon: Icon1,
    },
    {
        title: 'Web Design',
        description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
        // icon: Icon1,
    },
    {
        title: 'App Design',
        description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
        // icon: Icon1,
    },
    {
        title: 'Graphic Design',
        description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
        // icon: Icon1,
    },
];

const Home = () => {
    return (
        <>
            <Section pt={"120"}>
                <Container>
                    <Row>
                        <Col lg={6} className="d-flex align-items-center">
                            <div className={styles.hs_content}>
                                <h6 className={styles.intro}>Hi, I am</h6>
                                <h4 className={styles.name}>Fawzi Sayed</h4>
                                <h1 className={styles.title}>
                                    UI & UX <br /> <span>Designer</span>
                                </h1>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
                                </p>
                                <Button text={"Hire Me"} size={"small"} type={"fill"} />
                            </div>
                        </Col>
                        <Col>
                            <div className={styles.hs_image}>
                                <img src={HsImg} alt="hero" />
                                <SocialIcons />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section pt={"60"}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={abtImg} alt="" />
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center">
                            <div>
                                <SectionHeading
                                    title={"About Me"}
                                    des={" Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"}
                                />
                                {ProgressData.map((data, i) => {
                                    return (
                                        <div key={i}>
                                            <h6 className={styles.progress_label}>{data.label}</h6>
                                            <ProgressBar now={data.percentage} />
                                        </div>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section>

            <Section pt={"140"} pb={"140"}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className={styles.service_heading}>
                                <SectionHeading
                                    title={"Services"}
                                    des={"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {FeatureData.map((data, i) => (
                            <Col lg={3} key={i}>
                                <FeatureBox
                                    title={data.title}
                                    des={data.description}
                                    Icon={data.icon}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Row className="justify-content-center">
                        <Col  lg={8}> <div className={styles.service_heading}>
                            <SectionHeading title={"My Projects"} des={"Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"} />
                      </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                        <div className={styles.project_tabs}>
                        <Button text={"All"} size={"small"} type={"outline"} />
                        <Button text={"UI /UX"} size={"small"} type={"outline"} />
                        <Button text={"Web Design"} size={"small"} type={"fill"} />
                        <Button text={"App Design"} size={"small"} type={"outline"} />
                        <Button text={"Graphic Design"} size={"small"} type={"outline"} />
                        </div>
                        </Col>
                    </Row>
                </Container> 
            </Section>
        </>
    );
};

export default Home;
