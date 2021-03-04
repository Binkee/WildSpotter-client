import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export default class Home extends Component {
    render() {
        const {signIn, error} = this.props
        return (
            <div className="signIn"> 
                <h2>Wild Spotting</h2>
                <img className="wolf" src="wolf.png"alt="wolf" ></img>
                <h6>Do you know where you can find the European fabulous 5?</h6>
                <p>Log in to find them!</p>
               
                <form onSubmit={signIn}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                    {/* <Link to="/profile"> */}
                        <button type="submit" className="btn btn-primary">Login</button>
                    {/* </Link> */}
                    <Link to="/signup">
                        <div className="btn btn-primary">Sign Up</div>
                    </Link>
                </form>
            </div>
        )
    }
}
