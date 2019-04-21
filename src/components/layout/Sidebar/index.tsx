import { Component } from "react";
import { RouteComponentProps, withRouter } from 'react-router';
import routes from '../../../routes'
import React from 'react';
import { Link } from 'react-router-dom'
import SidebarPadding from './SidebarPadding';
import styled from 'styled-components';

class Sidebar extends Component<RouteComponentProps & SidebarProps> {
  public render() {
    const { className } = this.props
    const classes = className
    return (
      <StyledSidebar className={`main-sidebar nav border-right flex-column px-3 col-12 col-md-3 col-lg-2 ${classes}`}>
        <SidebarPadding />
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
      </StyledSidebar>
    )
  }
}

const StyledSidebar = styled.div`
  @media (min-width: 768px){
    height: 100vh;
  }
`

type SidebarProps = {
  className?: string
}

const SidebarRoute = (props: SidebarRouteProps) => {
  const { title, path, glyphicon } = props
  const iconClass = glyphicon ? ` glyphicon glyphicon-${glyphicon}` : ""

  return (
    <Link 
      className="sidebar-route nav-item"
      to={path}>
      <span className={glyphicon ? iconClass : ""} />
      <div className="nav-link">{title}</div>
    </Link>
  )
}

type SidebarRouteProps = {
  title: string | undefined
  path: string
  glyphicon: string | undefined
}

export default withRouter(Sidebar)