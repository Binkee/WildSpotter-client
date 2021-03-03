import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export default class Home extends Component {
    render() {
        const {signIn} = this.props
        return (
            <div className="signIn"> 
                <h2>Wild Spotting</h2>
                <img className="wolf" src="wolf.jpeg"alt="wolf" ></img>
                <h6>Do you know where you can find the European fabulous 5?</h6>
                <p>Log in to find them!</p>
               
                <form onSubmit={signIn}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" id="exampleInputEmail1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                    <Link to="/profile">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </Link>
                    <Link to="/signup">
                        <div className="btn btn-primary">Sign Up</div>
                    </Link>
                </form>
            </div>
        )
    }
}
