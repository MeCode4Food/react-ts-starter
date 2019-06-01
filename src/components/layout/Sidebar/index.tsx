import { Component } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import routes from '../../../routes'
import React from 'react';
import SidebarPadding from './SidebarPadding';
import SidebarRoute from './SidebarRoute';
import styled from 'styled-components';
import { AppMiscState } from 'src/reducers/app-reducer';
import { connect } from 'react-redux';
import { STORE_STATE } from 'src/reducers';

class Sidebar extends Component<RouteComponentProps & SidebarProps & AppMiscState> {
  public render() {
    const { className, showSidebar } = this.props
    const classes = className
    return (
      <StyledSidebar className={`main-sidebar nav border-right flex-column ${classes}`}>
        <SidebarPadding />
        <div className={`sidebar-collapse ${showSidebar ? 'show' : ''}`} id='sidebar'>
        {
          routes.filter(route => route.title)
          .map(route => {
            return (
              <SidebarRoute
              key={route.title}
              title={route.title}
              path={route.path}
              glyphicon={route.glyphicon}
              />
            )
          })
        }
        </div>
      </StyledSidebar>
    )
  }
}

const StyledSidebar = styled.div`
  @media (min-width: 768px){
    height: 100vh;

    .sidebar-collapse#sidebar{
      max-height: 50vh;
    }
  }

  .sidebar-collapse{
    max-height: 50vh;
    overflow: hidden;
    transition: max-height .3s ease;

    &:not(.show){
      max-height: 0;
    }
  }
`

type SidebarProps = {
  className?: string
}

const mapStateToProps = ({ appMisc }: STORE_STATE) => {
  const { showSidebar } = appMisc
  return { showSidebar }
}

export default connect(mapStateToProps)(withRouter(Sidebar))