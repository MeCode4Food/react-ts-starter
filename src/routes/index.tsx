import * as React from "react";
import { Redirect } from "react-router-dom";
import Home from "../views/Home"

// Layout Types
import { DefaultLayout } from "../layouts";
import About from 'src/views/About';

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Home,
    title: "Home",
    glyphicon: "home"
  },
  {
    path: "/about",
    layout: DefaultLayout,
    component: About,
    title: "About",
    glyphicon: "user"
  },
]