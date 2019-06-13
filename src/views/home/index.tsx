import Container from "src/components/container/Container";
import React from 'react';
import styled from 'styled-components';

// tslint:disable-next-line: no-var-requires
const cat = require('../../static/images/BongoCat.gif')
const Home = () => (
  <Container fluid={true} className="main-content-container px-4 py-3">
    {/* <Row noGutters={true} className="page-header py-4">
    </Row> */}
    <div>
      <h2>Welcome to CK's website</h2 >
      <div>
        <p>Here have a bongo cat for coming this far.</p>
      </div>
      <StyledImgParent>
        <StyledImg src={cat} />
      </StyledImgParent> 
    </div>
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