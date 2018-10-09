import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
// import { animateScroll as scroll } from "react-scroll";

let scrollToElement = require('scroll-to-element');
scrollToElement('#id');

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  // scrollTo = () => {
  //   scroll.scrollTo(730);
  // };

  scrollTo = () => {
    scrollToElement('.formContainer', {
      offset: 0,
      ease: 'outQuad',
      duration: 1000
    });
  }
  render() {
    return <div className="headerSection clearfix">
        <Nav user={this.state.user} appstate={this.props.appstate} />
        <section className="hero">
          <div className="heroScreen">
            <div className="wrapper">
              <div className="heroContent">
                <h2 className="heroHeading">'Cause sometimes you just need the cheapest wine out there.</h2>
                <p className="heroCopy">
                  Find your next bottle for under $22
                </p>
                <button onClick={this.scrollTo} className="btn">
                  Find Plonk
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>;
  }
}

export default Header;
