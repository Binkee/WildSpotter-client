import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import axios from "axios";
import config from "./config";
import NavBar from "./components/NavBar"
import AddAnimal from './components/AddAnimal'
import Tour from './components/Tour'
import AnimalDetail from './components/AnimalDetail'
import EditForm from './components/EditForm'
class App extends React.Component {
  state = {
    loggedInUser: null,
    error: null,
    animal: null,
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
        console.log(err)
        // this.setState({
        //   error: err.response.data,
        // });
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
            loggedInUser: null,
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

   handleAddAnimal = (event, myAnimal, location) => {
     event.preventDefault();
     let animal = {
      animal: myAnimal,
      location,
      description: event.target.description.value,
      image: event.target.image.value
    };

    axios.post(`${config.API_URL}/api/add`, animal, {withCredentials: true})
    .then((response) => {
        this.setState({
          animal: response.data
        }, () => {
          this.props.history.push('/profile')
        })
    })
  }

  handleAddTour = (event) => {
    event.preventDefault()
    let tour = {
      name: event.target.name.value,
      location: event.target.location.value,
      description: event.target.description.value,
    };
    axios.post(`${config.API_URL}/api/tour`, tour, {withCredentials: true})
    .then((response) => {
        this.setState({
          tour:response.data
        }, () => {
          this.props.history.push('/profile')
        })
    })
  }

   handleSearch = () => {

   }

   handleDelete = (animalId) => {
    //1. Make an API call to the server side Route to delete that specific todo
      axios.delete(`${config.API_URL}/api/animalDetail/${animalId}`)
        .then(() => {
           // 2. Once the server has successfully created a new todo, update your state that is visible to the user
            let filteredAnimal = this.state.animal.filter((animal) => {
              return animal._id !== animalId
            })
            this.setState({
              animal: filteredAnimal
            }, () => {
              this.props.history.push('/')
            })
        })
        .catch((err) => {
          console.log('Delete failed', err)
        })
   }


   handleEditAnimal = (animal) => {
    axios.patch(`${config.API_URL}/api/animalDetail/${animal._id}`, {
      animal: animal.animal,
      description: animal.description,
      image: animal.image,
    })
      .then(() => {
          let newAnimal = this.state.animal.map((singleAnimal) => {
              if (animal._id === singleAnimal._id) {
                singleAnimal.animal  = animal.animal
                singleAnimal.description = animal.description
              }
              return singleAnimal
          })
          this.setState({
            animal: newAnimal
          }, () => {
            this.props.history.push('/')
          })

          
      })
      .catch((err) => {
        console.log('Edit failed', err)
      })

 }
  
  render() {
    return (
      <div>
         {
          this.state.loggedInUser ? <NavBar logout={this.handleLogout} search={this.handleSearch} {...this.props} /> : null
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
              return <Profile news={this.state.animal} logout={this.handleLogout} loggedInUser={this.state.loggedInUser} {...routeProps}/>;
            }}
          />
          <Route path="/add" render={(routeProps) => {
              return <AddAnimal  addAnimal={this.handleAddAnimal}{...routeProps}/>;
            }}
          />

          <Route path="/tour" render={(routeProps) => {
              return <Tour addTour={this.handleAddTour}/>;
            }}
          />    
           <Route  path="/animalDetail/:animalId/edit" render={(routeProps) => {
                return <EditForm onEdit={this.handleEditAnimal} {...routeProps}/>
            }} />
          <Route path="/animalDetail/:animalId" render={(routeProps) => {
              return <AnimalDetail delete={this.handleDelete}{...routeProps} />;
            }} />

           
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)