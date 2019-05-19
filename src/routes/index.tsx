import * as React from "react";
import { Redirect } from "react-router-dom";
import Home from "../views/Home"

// Layout Types
import { DefaultLayout } from "../layouts";
import CatList from 'src/views/CatList';

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
    path: "/cat-list",
    layout: DefaultLayout,
    component: CatList,
    title: "Cat List",
    glyphicon: "user"
  },
]