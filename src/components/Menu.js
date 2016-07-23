import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Menu extends Component {
  render() {
    return (
      <div style={{marginTop : '60px'}}>
        <nav className="navbar navbar-inverse navbar-fixed-top" id="main-navbar" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                <a href="index.html" className="navbar-brand">React Simple Starter Kit</a>
                </div>
                <div className="collapse navbar-collapse" id="navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li className={this.props.route.path === '/' ? 'active' : ''} ><Link to={'/'}>App</Link></li>
                      <li className={this.props.route.path === '/home' ? 'active' : ''} ><Link to={'/home'}>Home</Link></li>
                      <li className={this.props.route.path === '/about' ? 'active' : ''} ><Link to={'/about'}>About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}
