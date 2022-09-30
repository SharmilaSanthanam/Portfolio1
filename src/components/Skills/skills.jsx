import React from 'react'
import { motion } from "framer-motion";
import "./skills.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Htmlimage from "../../images/html2.png";
import Cssimage from "../../images/css1.png";
import Jsimage from "../../images/JS1.png";
import Reactimage from "../../images/React1.png";
import Nodeimage from "../../images/Node2.png";
import Mongoimage from "../../images/Mongo1.png";
import Adobeimage from "../../images/adobe.png"
import Gitimage from "../../images/git.jpg";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type:"spring" , 
      damping: 30,
      stiffness: 500,
    },

  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Skills = () => {


  return (

    <motion.div

      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <Row>
          <Col sm={3}>
            <img src={Jsimage} alt="" className="a-img2" />
          </Col>
          <Col sm={3}>
            <img
              src={Htmlimage} alt="" className="a-img1" />
          </Col>
          <Col sm={3}>
            <img
              src={Cssimage} alt="" className="a-img3" />
          </Col>
          <Col sm={3}>
            <img
              src={Adobeimage} alt="" className="a-img7" />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <img src={Reactimage} alt="" className="a-img4" />
          </Col>
          <Col sm={3}>
            <img src={Nodeimage} alt="" className="a-img5" />
          </Col>
          <Col sm={3}>
            <img src={Mongoimage} alt="" className="a-img6" />
          </Col>
          <Col sm={3}>
            <img src={Gitimage} alt="" className="a-img7" />
          </Col>
        </Row>
      </Container>
    </motion.div>
  )
}
export default Skills;