import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState(
          {
            user
          },
          () => {
            this.dbref = firebase.database().ref(this.state.user.uid);
          }
        );
      }
    });
  }
  login = () => {
    auth.signInWithPopup(provider).then(res => {
      console.log(res);
      this.setState({
        user: res.user
      });
      // this.props.appstate(this.state.user);
    });
  };
  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
      // this.props.appstate(this.state.user);
    });
  };
  render() {
    return (
      <div className="wrapper">
        <header>
          <Link to="/">
            <h1>PLONK.</h1>
          </Link>
          {/* authentication starts */}
          <nav>
            <ul>
              {this.state.user ? (
                <div className="loggedIn">
                  <li>
                    {" "}
                    <Link to="/">
                      <i onClick={this.logout} class="fas fa-sign-out-alt" />
                      <p onClick={this.logout}>Logout</p>
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to={`/user/${this.state.user.uid}`}>
                      <i class="fas fa-heart" />
                      <p>My Cellar</p>
                    </Link>{" "}
                  </li>
                </div>
              ) : (
                <div className="loggedOut">
                  <li>
                    {" "}
                    <i onClick={this.login} class="fas fa-sign-in-alt" />
                    <p onClick={this.login}>Login</p>{" "}
                  </li>
                  {/* authentication ends */}
                </div>
              )}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
