import Container from "src/components/container/Container";
import Row from 'src/components/container/Row';
import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <Container fluid={true} className="main-content-container px-4 py-3">
    <Row noGutters={true} className="page-header py-4">
      Welcome to CK's website
      <br />
      <br />
      Here have a bongo cat for coming this far.
      <StyledImgParent>
        <StyledImg src={require('../assets/BongoCat.gif')} />
      </StyledImgParent> 
    </Row>
  </Container>
)

const StyledImgParent = styled.div`
  width: 100%;
`

const StyledImg = styled.img`
  object-fit: scale-down;
  max-width: 100%;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`


export default Home