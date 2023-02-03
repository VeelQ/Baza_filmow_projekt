import React from "react";
const axios = require('axios');

const SignupForm = () => {


    let name = ""
    const nameInput = (e) => {
        name = e.target.value
    }

    let password = ""
    const passInput = (e) => {
        password = e.target.value
    }

    let email = ""
    const emailInput = (e) => {
        email = e.target.value
    }

    const validatePass = (e) => {
        e.target.setCustomValidity(e.target.value!== password? "Passwords not the same": "")
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/user/create',
            data: {
                name: name,
                email: email,
                password: password
            }
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error);
        });


   };



    return (
        
        <div className="containter d-flex justify-content-center">
        <div className="col-md-5 px-3 px-lg-5 py-5 bg-dark mb-5">
                    
        <form onSubmit={handleSubmit}>
                <div className="text-center text-white">
                    <p>Sign up with:</p>
                  
                </div>

                

                
                <div className="form-outline mb-3">
                    <input type="text" id="registerUsername" className="form-control form-control-lg bg-dark text-light"
                    placeholder="Username" onChange={nameInput} required/>
                    {/* <label className="form-label" htmlFor="registerUsername">Username</label> */}
                </div>

                
                <div className="form-outline mb-3">
                    <input type="email" id="registerEmail" className="form-control form-control-lg bg-dark text-light"
                     placeholder="Email" onChange={emailInput} required/>
                    {/* <label className="form-label" htmlFor="registerEmail">Email</label> */}
                </div>

                
                <div className="form-outline mb-3">
                    <input type="password" id="registerPassword" className="form-control form-control-lg bg-dark text-light"
                    placeholder="Password" onChange={passInput} required/>
                    {/* <label className="form-label" htmlFor="registerPassword">Password</label> */}
                </div>


                <div className="form-outline mb-3">
                    <input type="password" className="form-control form-control-lg bg-dark text-light" id="repeatPassword"
                    placeholder="Password" onChange={validatePass} required/>
                    {/* <label htmlFor="repeatPassword">Repeat password</label> */}
                </div>

                
                <div className="form-check d-flex justify-content-center mb-4 text-white">
                    <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                    aria-describedby="registerCheckHelpText" />
                    <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                    </label>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary mb-3">Sign in</button>
                </div>
                </form>
            
        </div>
        </div>
   )
};
export default SignupForm;