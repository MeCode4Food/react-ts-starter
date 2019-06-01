import styled from "styled-components";
import { Component } from 'react';
import React from 'react';
import { STORE_STATE } from 'src/reducers';
import { connect } from 'react-redux';
import { bindActionCreators, AnyAction, Dispatch, ActionCreator } from 'redux';
import { toggleSidebar, ToggleSidebarAction } from 'src/actions/app-actions';
import { AppMiscState } from 'src/reducers/app-reducer';
import HamburgerMenu from 'src/components/hamburger-menu'

class Navbar extends Component<NavbarProps & AppMiscProps & AppMiscState> {
  constructor(props: any){
    super(props)

    this.onToggleClick = this.onToggleClick.bind(this)
  }
  public render() {
    const { showSidebar, ...attr } = this.props
    return (
      <StyledNavbar {...attr} >
        <HamburgerMenu
          showSidebar={showSidebar}
          className="m-4 d-xs-inline-block d-lg-none" 
          onClick={this.onToggleClick} />
      </StyledNavbar>
    )
  }

  private onToggleClick(){
    const { toggleSidebar } = this.props
    console.log('toggle clicked', )
    toggleSidebar()
  }
}

type NavbarProps = {
  className: string
}

type AppMiscProps = {
  toggleSidebar: ActionCreator<ToggleSidebarAction>
}

const StyledNavbar = styled.div`
  // more than lg
  @media (min-width: 768px){
    height: 3rem;
  }
`

const mapStateToProps = ({ appMisc }: STORE_STATE) => {
  const { showSidebar } = appMisc
  return { showSidebar }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    { toggleSidebar },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)