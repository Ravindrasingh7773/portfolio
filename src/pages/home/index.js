import React,{useEffect,useState,useRef} from "react";
import styles from "./style.module.css";
import Section from "../../components/section";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import HsImg from "../../assets/images/my_img.png";
import abtImg from "../../assets/images/my_image2.png";
import { Col, Container, Row } from "react-bootstrap";
import SocialIcons from "../../components/socialIcons";
import Button from "../../components/button";
import SectionHeading from "../../components/sectionHeading";
import ProgressBar from "react-bootstrap/ProgressBar";
import FeatureBox from "../../components/featureBox";
import Icon1 from "../../assets/images/service-image.png";
import Icon2 from "../../assets/images/service-image2.png";
import Icon3 from "../../assets/images/service-image3.png";
import Icon4 from "../../assets/images/service-image4.png";
import Img1 from "../../assets/images/project-1.png";
import Img2 from "../../assets/images/project2.png";
import Img3 from "../../assets/images/project-3.png";
import Image1 from "../../assets/images/test-1.png";
import Image2 from "../../assets/images/test-1.png";
import Image3 from "../../assets/images/test-1.png";
import ProjectBox from "../../components/projectBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required Swiper modules
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

import TestimonialBox from "../../components/testimonialBox";

const ProgressData = [
  { label: "HTML 5", percentage: 90 },
  { label: "CSS", percentage: 85 },
  { label: "Javascript", percentage: 95 },
  { label: "React Js", percentage: 90 },
];

const FeatureData = [
  {
    title: "Responsive Design",
    description:
      "Creating responsive websites using HTML, CSS, and JavaScript for all devices.",
    icon: Icon4,
  },
  {
    title: "Web Development",
    description:
      "Building scalable web apps with React.js, HTML, and CSS.",
    icon: Icon4,
  },
  {
    title: "UI/UX Implementation",
    description:
      "Turning designs into functional interfaces with HTML, CSS, and JavaScript.",
    icon: Icon4,
  },
  {
    title: "E-commerce",
    description:
      "Developing e-commerce solutions using JavaScript and React.js.",
    icon: Icon4,
  },
  {
    title: "Component Development",
    description:
      " Creating reusable components in React.js and JavaScript.",
    icon: Icon1,
  },
  {
    title: "SEO Optimization",
    description:
      "Implementing on-page SEO techniques like semantic HTML, meta tags, and optimized images to improve search engine rankingss",
    icon: Icon2,
  },
  {
    title: "API Integration",
    description:
      " Integrating third-party APIs (RESTful or GraphQL) using JavaScript and React to fetch and display dynamic data seamlessly in web applications",
    icon: Icon3,
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Ensuring websites work consistently across all major browsers using best practices in CSS and JavaScript",
    icon: Icon4,
  },
];

const ProjectData = [
  {
    description: "Web Design",
    title: "AirCalling Landing Page Design ",
    image: Img1,
  },
  {
    description: "Web Design",
    title: "Business Landing Page Design ",
    image: Img2,
  },
  {
    description: "Web Design",
    title: "Ecom Web Page Design ",
    image: Img3,
  },
];
const TestData = [
  {
    quotes:
      "Ravindra’s work exceeded our expectations. He turned complex designs into responsive, functional websites with ease. His attention to detail and commitment to quality is truly impressive.",
    position: " Creative Director at Design Studio",
    name: "Sarah K. ",
    image: Image1,
  },
  {
    quotes:
      "Working with Ravindra has been a pleasure. His ability to translate ideas into effective and elegant code is remarkable. He always delivers on time and goes above and beyond to ensure everything works perfectly.",
    position: "CEO at E-commerce Startup",
    name: "John M. ",
    image: Image2,
  },
  {
    quotes:
      "Ravindra brings a high level of professionalism and expertise. His frontend skills made our web app look and perform brilliantly across all devices. I highly recommend him!",
    position: "Product Manager at Tech Solutions",
    name: "Emily P. ",
    image: Image3,
  },
];

const tabData = [
  { id: 0, title: "Home", content: "This is the Home tab content." },
  { id: 1, title: "About", content: "This is the About tab content." },
  { id: 2, title: "Services", content: "This is the Services tab content." },
  { id: 3, title: "Contact", content: "This is the Contact tab content." },
];


const Home = () => { 
  const [activeTab, setActiveTab] = useState(0);
  const [progressValues, setProgressValues] = useState(
    ProgressData.map(() => 0) // Initialize with 0 values
  );
  const progressSectionRef = useRef(null); // Reference to the progress section

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      offset: 200,
      delay: 300,
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
    AOS.refresh(); 
  
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the animation when section comes into view
            setProgressValues(ProgressData.map((data) => data.percentage));
            observer.disconnect(); // Stop observing once the animation is triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );
  
    if (progressSectionRef.current) {
      observer.observe(progressSectionRef.current); // Start observing the section
    }
  
    return () => {
      if (progressSectionRef.current) {
        observer.unobserve(progressSectionRef.current); // Clean up observer
      }
    };
  }, []);
  
  
  return (
    <>
      <Section pt={"80"}>
        <Container>
          <Row>
            <Col lg={6} className="d-flex align-items-center"  >
              <div className={styles.hs_content}>
                <h6 className={styles.intro}  data-aos="fade-up">Hi, I am</h6>
                <h4 className={styles.name} data-aos="fade-up" data-aos-delay="300">Ravindra Singh</h4>
                <h1 className={styles.title} data-aos="fade-up" data-aos-delay="500">
                  Frontend <br /> <span>Developer</span>
                </h1>
                <p className={styles.description} data-aos="fade-up"  data-aos-delay="700">
                  I’m a passionate frontend developer with expertise in building
                  dynamic, responsive, and user-friendly web applications. Let's
                  turn your ideas into powerful web experiences.
                </p>
                <div  data-aos="fade-up" data-aos-delay="750">
                <Button text={"Hire Me"} size={"small"} type={"fill"}  />
                </div>
               
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.hs_image}>
                <img src={HsImg} alt="hero"   data-aos="zoom-in" />
                <SocialIcons />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pt={"60"}  ref={progressSectionRef} >
        <Container>
          <Row>
            <Col lg={6} >
              <div>
                <img src={abtImg} alt=""   data-aos="zoom-in"  />
              </div>
            </Col>
            <Col ld={6} className="d-flex align-items-center"  data-aos="zoom-in-up">
              <div>
                <SectionHeading
                  title={"About Me"}
                  des={
                    " I create visually appealing, high-performance websites using React. With expertise in responsive design and CSS modules, I deliver seamless user experiences while continuously improving my frontend and backend skills."
                  }
                />
                {/* {ProgressData.map((data, i) => {
                  return (
                    <div key={i} className={styles.progress_bar}>
                      <h6 className={styles.progress_label}>{data.label}</h6>
                      <ProgressBar now={data.percentage} />
                    </div>
                  );
                })} */}
                                {ProgressData.map((data, i) => (
                  <div key={i} className={styles.progress_bar}>
                    <h6 className={styles.progress_label}>{data.label}</h6>
                    <ProgressBar
                      now={progressValues[i]} // Update dynamically based on state
                      
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section pt={"140"} pb={"140"}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}   data-aos="fade-up"  >
              <div className={styles.service_heading}>
                <SectionHeading
                  title={"Services"}
                  des={
                    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
                  }
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            {FeatureData.map((data, i) => (
              <Col lg={3} key={i}  data-aos="fade-up" data-aos-delay={`${i * 1000}`} >
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
            <Col lg={8}>
              <div className={styles.service_heading}>
                <SectionHeading
                  title={"My Projects"}
                  des={
                    "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
                  }
                />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className={styles.project_tabs}>
                {tabData.map((data,i)=>
                  <Button text={data.title} size={"small"} type={"outline"} key={i} isButton={true} onClick={() => setActiveTab(i)} customCss={`${styles.tabButton} ${
                    activeTab === i ? styles.activeTab : ""
                  }`} />
                )}
{/*                 
                <Button text={"UI /UX"} size={"small"} type={"outline"} />
                <Button text={"Web Design"} size={"small"} type={"fill"} />
                <Button text={"App Design"} size={"small"} type={"outline"} />
                <Button
                  text={"Graphic Design"}
                  size={"small"}
                  type={"outline"}
                /> */}
              </div>
            </Col>
          </Row>
          <Row>
            {ProjectData.map((data, i) => (
              <Col lg={4} key={i}>
                <ProjectBox
                  title={data.title}
                  des={data.description}
                  Image={data.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      <Section pt={"140"} pb={"140"}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className={styles.service_heading}>
                <SectionHeading
                  title={"Testimonials"}
                  des={
                    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
                  }
                />
              </div>
            </Col>
          </Row>
          <Row className={styles.mt_72}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              centeredSlides={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              keyboard={{
                enabled: true,
              }}
              pagination={{ clickable: true }}
              modules={[Keyboard, /* Autoplay, */ Navigation, Pagination]}
              className="mySwiper"
            >
              {TestData.map((data, i) => (
                <SwiperSlide key={i}>
                  <TestimonialBox
                    name={data.name}
                    position={data.position}
                    Image={data.image}
                    quotes={data.quotes}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </Section>
      <Section pb={"140"}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className={styles.service_heading}>
                <SectionHeading
                  title={"Lets Design Together"}
                  des={
                    "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
                  }
                />
                <div className={styles.contact_input}>
                  <Button
                    text={"Contact Me"}
                    size={"large"}
                    type={"fill"}
                    to={"mailto:itsravindra2006@gmail.com"}
                    Target={"_blank"}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Section>
    </>
  );
};

export default Home;
