import styled from "styled-components";
import { Component } from 'react';
import React from 'react';

class Navbar extends Component<NavbarProps> {
  public render() {
    const { ...attr } = this.props
    return (
      <StyledNavbar {...attr} />
    )
  }
}

type NavbarProps = {
  className: string
}

const StyledNavbar = styled.div`
  // more than lg
  @media (min-width: 768px){
    height: 3rem;
  }
`

export default Navbar