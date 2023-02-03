import React from "react";
import { Link } from "react-router-dom";

// Veelq Kokos123

import axios from "axios";
const LoginForm = () => {

    let login = ""

    const loginInput = (e) => {
        login = e.target.value
    }

    let password = ""

    const passInput = (e) => {
        password = e.target.value
    }

    let errorText = React.createRef();

    const handleSubmit = (event) => {
        event.preventDefault()

        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/user/auth',
            data: {
                login: login,
                password: password
            }
        }).then((response) => {
            errorText.current.setAttribute("hidden", true)
            localStorage.setItem('token', response.data.token)
            console.log(response)
            window.location.assign("/")
        }).catch((error) => {
            console.log(error)
            if(!errorText.current.hasAttribute("hiden")){
                errorText.current.removeAttribute("hidden")
            }
        })
    }

    return (
        <div className="containter d-flex justify-content-center">
        <div className="col-md-5 px-3 px-lg-5 py-5 bg-dark mb-5">
            <form className="text-white" onSubmit={handleSubmit}>
            <div className="text-center text-white">
                    <p>Log in with:</p>
                  
                </div>
                
            <div className="form-outline mb-3">
                    <input type="text" id="loginEmail" className="form-control form-control-lg bg-dark text-light"
                     placeholder="Username" onChange={loginInput} required/>
                    {/* <label className="form-label" htmlFor="loginEmail">Username</label> */}
                </div>

                
                <div className="form-outline mb-3">
                    <input type="password" id="loginPass" className="form-control form-control-lg bg-dark text-light"
                     placeholder="Password" onChange={passInput} required/>
                    {/* <label className="form-label" htmlFor="loginPass">Password</label> */}
                    <p className="error text-danger" ref={errorText} hidden>Incorrect login or password</p>
                </div>

                
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label class="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" class="btn btn-primary btn-block mb-4">Log in</button>
                </div>
                
                <div class="text-center">
                    <p>Not a member? <Link to="/signup">Register</Link></p>
                   
                </div>
                </form>
        </div>
        </div>
   )
};
export default LoginForm;