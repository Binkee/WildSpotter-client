import React, { Component } from 'react'



export default class SignUp extends Component {
    render() {
        const {signUp} = this.props
        return (
            <div className="signUp">
                <h2>Wild Spotting</h2>
                <img className="wolf" src="wolf.jpeg" ></img>
                <h6>Sign up to find the fabulous 5</h6>
                
                <form onSubmit={signUp}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" id="exampleInputEmail1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                   
                    
                </form>
            </div>
        )
    }
}
