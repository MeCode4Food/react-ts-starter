import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes"

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as React from 'react';

ReactDOM.render(
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          // tslint:disable-next-line:jsx-no-lambda
          component={() => {
            return (
              <route.layout >
                <route.component />
              </route.layout>
            )
          }}
        />
      );
    })}
  </Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();