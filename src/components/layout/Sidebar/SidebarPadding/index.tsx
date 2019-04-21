import { Component } from "react";
import React from 'react';
import styled from 'styled-components';

class SidebarPadding extends Component {
    public render() {
      return (
        <StyledPadding className="" />
      )
    }
}

const StyledPadding = styled.div`
  // more than lg
  @media (min-width: 768px){
    height: 3rem;
  }
`

export default SidebarPadding