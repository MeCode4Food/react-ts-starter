import * as React from "react";

import Container from 'src/components/container/Container';
import Row from 'src/components/container/Row';
import Sidebar from 'src/components/layout/Sidebar';
import Footer from 'src/components/layout/Footer';
import Navbar from 'src/components/layout/Navbar';
import styled from 'styled-components';

const DefaultLayout = ({ children, noNavbar = false, noFooter = false }: DefaultLayoutProps) => (
  <Container fluid={true}>
      <StyledRow>
        {/* <div className="main-sidebar px-0 col-12 col-md-3">Sidebar</div> */}
        <Navbar className="main-navbar bg-white d-md-none" />
        <Sidebar className=" px-3 col-12 col-lg-2 col-md-3 "/>
        <div className="main-content p-0 col-12 col-lg-10 col-md-9">
          <Navbar className="main-navbar bg-white d-none d-md-block" />
          {children}
          <Footer className="main-footer d-flex p-2 px-3 bg-white border-top" />
        </div>
      </StyledRow>
  </Container>
);

const StyledRow = styled(Row)`
  /* height: inherit; */
`

type DefaultLayoutProps = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: boolean
  /**
   * Whether to display the footer, or not.
   */
  noFooter: boolean
  /**
   * The component's children type
   */
  children: any
}

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
