import * as React from "react";
import { Redirect } from "react-router-dom";

// Main Pages
import Home from "../views/home"
import CatList from 'src/views/cat-list';
import CatStats from 'src/views/cat-stats';

// Layout Types
import { DefaultLayout } from "../layouts";

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
  {
    path: "/cat-stats",
    layout: DefaultLayout,
    component: CatStats,
    title: "Cat Stats",
    glyphicon: "user"
  },
]