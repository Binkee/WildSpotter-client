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
import TourDetail from './components/TourDetail'
import EditTours from './components/EditTours'
import NotFound from './components/NotFound'
import "./components/MyMap.css"

class App extends React.Component {
  state = {
    loggedInUser: null,
    error: null,
    animal: null,
    fetchingUser:true,
    searchAnimal: null,
    allTours: []
  };

   componentDidMount(){

    if (!this.state.loggedInUser) {
      axios.get(`${config.API_URL}/api/user`, {withCredentials: true})
        .then((response) => {
            this.setState({
              loggedInUser: response.data,
              fetchingUser: false
            })
        })
        .catch((err) => {
          console.log(err)
          this.setState({
            fetchingUser: false
          })
        })
    }  

    axios.get(`${config.API_URL}/api/tours`,  {withCredentials: true})
            .then((response)=>{
                console.log("response.data")
                this.setState({
                    allTours: response.data
                })
            })
            .catch(()=>{
            })
  }

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

   handleAddAnimal = (event, myAnimal, location, tourId) => {
     event.preventDefault();
     let animal = {
      animal: myAnimal,
      location,
      description: event.target.description.value,
      image: event.target.image.value,
      tourId
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
    axios.post(`${config.API_URL}/api/tours`, tour, {withCredentials: true})
    .then((response) => {
        this.setState({
          tour:response.data,
          allTours:[response.data, ...this.state.allTours]
        }, () => {
          this.props.history.push('/profile')
        })
    })
  }


   handleDelete = (animalId) => {
    //1. Make an API call to the server side Route to delete that specific animal
      axios.delete(`${config.API_URL}/api/animalDetail/${animalId}`)
        .then(() => {
           // 2. Once the server has successfully created a new animal, update your state that is visible to the user
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
 handleSearch = (event) => {

  this.setState(
      {
        searchAnimal: event.target.value,
      },
      
    );
     console.log(event.target.value)
 }
  

 handleEditTour = (tour) => {
  axios.patch(`${config.API_URL}/api/tourDetail/${tour._id}`, {
    name: tour.name,
    description: tour.description,
  })
    .then(() => {
        let newTour = this.state.tour.map((singleTour) => {
            if (tour._id === singleTour._id) {
              singleTour.name  = tour.name
              singleTour.description = tour.description
            }
            return singleTour
        })
        this.setState({
          tour: newTour
        }, () => {
          this.props.history.push('/profile')
        })

        
    })
    .catch((err) => {
      console.log('Edit failed', err)
    })

}


handleDeleteTour = (tourId) => {
  //1. Make an API call to the server side Route to delete that specific todo
    axios.delete(`${config.API_URL}/api/tourDetail/${tourId}`)
      .then(() => {
         // 2. Once the server has successfully created a new todo, update your state that is visible to the user
          let filteredTour = this.state.animal.filter((tour) => {
            return tour._id !== tourId
          })
          this.setState({
            tour: filteredTour
          }, () => {
            this.props.history.push('/')
          })
      })
      .catch((err) => {
        console.log('Delete failed', err)
      })
 }


  render() {
    console.log('This is the user connected -->', this.state.loggedInUser)
    if (this.state.fetchingUser) {
        return <p>Loading</p>
    }
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
              return <Profile searchAnimal={this.state.searchAnimal}  news={this.state.animal} logout={this.handleLogout} loggedInUser={this.state.loggedInUser} {...routeProps}/>;
            }}
          />
          <Route path="/add" render={(routeProps) => {
              return <AddAnimal allTours={this.state.allTours} addAnimal={this.handleAddAnimal}{...routeProps}/>;
            }}
          />

          <Route path="/tour" render={(routeProps) => {
              return <Tour addTour={this.handleAddTour} {...routeProps}/>;
            }}
          />    
           <Route  path="/animalDetail/:animalId/edit" render={(routeProps) => {
                return <EditForm onEdit={this.handleEditAnimal} {...routeProps}/>
            }} />
          <Route path="/animalDetail/:animalId" render={(routeProps) => {
              return <AnimalDetail delete={this.handleDelete}{...routeProps} />;
            }} />
            <Route  path="/tourDetail/:tourId/edit" render={(routeProps) => {
                return <EditTours onEdit={this.handleEditTour} {...routeProps}/>
            }} />
          <Route path="/tourDetail/:tourId" render={(routeProps) => {
              return <TourDetail delete={this.handleDeleteTour}{...routeProps} />;
            }} />
             <Route component={NotFound} />
           
        </Switch>
      </div>
    );
  }
}
export default withRouter(App)