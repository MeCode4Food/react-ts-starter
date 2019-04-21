import Container from "src/components/container/Container";
import Row from 'src/components/container/Row';
import React from 'react';

const About = () => (
  <Container fluid={true} className="main-content-container px-4">
    <Row noGutters={true} className="page-header py-4">
      About Me
    </Row>
  </Container>
)

export default About