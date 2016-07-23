import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import {App, About, NoMatch, Home } from '../views'
import React, { Component } from 'react';
//every time routes remain same that the reason in hmr you wont get errot
let routes = <div>
              <Route path="/" component={App} />
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Route path="*" component={NoMatch} />
            </div>
export default class Routers extends Component {
    render() {
        return (
          <Router history={hashHistory} routes={routes} />
        );
    }
}
