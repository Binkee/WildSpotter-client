import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import axios from "axios";
import config from "./config";
import NavBar from "./components/NavBar"

 class App extends React.Component {
  state = {
    loggedInUser: null,
    error: null,
  };

  handleSignIn = (event) => {
    event.preventDefault();
    let user = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    axios.post(`${config.API_URL}/api/signIn`, user)
      .then((response) => {
        console.log(response.data)
        this.setState(
          {
            loggedInUser: response.data,
            
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((err) => {
        this.setState({
          error: err.response.data,
        });
      });
  };

  handleSignUp = (event) => {
    event.preventDefault();

    let user = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    axios.post(`${config.API_URL}/api/signup`, user)
      .then((response) => {
        this.setState(
          {
            loggedInUser: response.data,
          },
          () => {
            this.props.history.push("/");
          }
        );
      })
      .catch((err) => {
        console.log(err)
         this.setState({
           error: err.response.data,
         });
      });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(routeProps) => {
              return <Home signIn={this.handleSignIn} {...routeProps} />;
            }}
          />
          <Route path="/signup" render={(routeProps) => {
              return <SignUp signUp={this.handleSignUp} error={this.state.error} {...routeProps} />;
            }}
          />
          <Route path="/profile" render={(routeProps) => {
              return <Profile loggedInUser={this.state.loggedInUser}/>;
            }}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)