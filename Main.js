import React, { Component } from "react";
import firebase from "firebase";
import Loading from "./components/Loading";
import Login from "./views/Login";
import { Switch, Route,Redirect } from "react-router-dom";
import Admin from "./layouts/Admin.js";
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      hasCheckedLogin: false,
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user: user, hasCheckedLogin: true });
      console.log(user);
    });
  }

  render() {
    // Hasn't checked login yet, show a loading message
    if (!this.state.hasCheckedLogin) {
      return <Loading />;
    }
    // Has checked login, but user isn't authenticated
    if (!this.state.user) {
      return <Login />;
    }
    // Has checked login, and user is authenticated
    else {
      return (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      );
    }
  }
}
