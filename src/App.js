import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import axios from "axios";
import config from "./config";
import NavBar from "./components/NavBar"
import AddAnimal from './components/AddAnimal'
import Tour from './components/Tour'
 
class App extends React.Component {
  state = {
    loggedInUser: null,
    error: null,
  };

  handleSignIn = (event) => {
    event.preventDefault();
    let user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log('Coming here')
    axios.post(`${config.API_URL}/api/signIn`, user, {withCredentials: true})
      .then((response) => {
        console.log(`signin data`, response.data)
        this.setState(
          {
            loggedInUser: response.data,
            
          },
          () => {
            this.props.history.push("/profile");
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
        console.log(err)
         this.setState({
           error: err.response.data,
         });
      });
  };

  handleLogout = () => {
  
    axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
    .then(() => {
        this.setState({
          loggedInUser: null
        }, () => {
          this.props.history.push('/')
        })
    })
  
   }
  
  render() {
    return (
      <div>
         {
          this.state.loggedInUser ? <NavBar {...this.props} /> : null
         }
        <Switch>
          <Route exact path="/" render={(routeProps) => {
              return <Home signIn={this.handleSignIn} error={this.state.error}  {...routeProps} />;
            }}
          />
          <Route path="/signup" render={(routeProps) => {
              return <SignUp signUp={this.handleSignUp} error={this.state.error} {...routeProps} />;
            }}
          />
          <Route path="/profile" render={(routeProps) => {
              return <Profile logout={this.handleLogout} loggedInUser={this.state.loggedInUser}{...routeProps} />;
            }}
          />
          <Route path="/add" render={(routeProps) => {
              return <AddAnimal/>;
            }}
          />

          <Route path="/tour" render={(routeProps) => {
              return <Tour/>;
            }}
          />    
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)