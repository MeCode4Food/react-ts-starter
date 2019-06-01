import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { colours } from '../../../../static/style/style-constants'

const SidebarRoute = (props: SidebarRouteProps) => {
  const { title, path, glyphicon } = props
  const iconClass = glyphicon ? ` glyphicon glyphicon-${glyphicon}` : ""

  return (
    <StyledRoute>
      <Link 
        className="sidebar-route nav-item"
        to={path}>
        <span className={glyphicon ? iconClass : ""} />
        <div className="nav-link">{title}</div>
      </Link>
    </StyledRoute>
  )
}

const StyledRoute = styled.div`
  a {
    text-decoration: none !important; // bootstrap
  }
  .nav-item:hover {
      .nav-link {
        color: ${colours.black};
        transition: .3s;
      }
  }
  .nav-item {
    .nav-link {
      color: ${colours.greyMedium};
      transition: 0.3s;
    }
  }
`

type SidebarRouteProps = {
  title: string | undefined
  path: string
  glyphicon: string | undefined
}

export default SidebarRoute