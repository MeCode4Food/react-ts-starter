import React from 'react'
import styled from 'styled-components'

const HamburgerMenu = ({ showSidebar, className, onClick }: HamburgerMenuProps) => {
  return (
    <StyledHamburgerMenu 
      className={`menu ${showSidebar ? 'change' : ''} ${className}`}
      onClick={onClick ? () => onClick() : undefined}>
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </StyledHamburgerMenu>
  )
}

const StyledHamburgerMenu = styled.div`
  .menu {
    display: block;
    cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #000000;
    margin: 6px 0;
    transition: 0.4s;
  }

  /* Rotate first bar */
  &.change > .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
    transform: rotate(-45deg) translate(-9px, 6px) ;
  }

  /* Fade out the second bar */
  &.change > .bar2 {
    opacity: 0;
  }

  /* Rotate last bar */
  &.change > .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
    transform: rotate(45deg) translate(-8px, -8px) ;
  }
`

type HamburgerMenuProps = {
  showSidebar: boolean,
  className? : string,
  onClick?: () => void
}

export default HamburgerMenu
