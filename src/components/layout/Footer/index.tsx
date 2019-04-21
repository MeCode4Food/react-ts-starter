import { Component } from 'react';
import styled from 'styled-components';
import React from 'react';

class Footer extends Component<FooterProps>{
  public render(){
    const { ...attr } = this.props
    return (
      <StyledFooter {...attr}>Copyright 2019 ©  LOLOLOL  |  Chee Khuin</StyledFooter>
    )
  }
}

type FooterProps = {
  className?: string
}

const StyledFooter = styled.footer`
  position: fixed;
  width: inherit;
  bottom: 0;
`
export default Footer