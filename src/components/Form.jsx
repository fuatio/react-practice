import React from "react";
import Input from "./Input"

function Form(props) {
    return (
        <form className="form">
            <input
                type='username'
                placeholder='Username'
            />
            <input
                type='password'
                placeholder='Password'
            />
            {props.isRegistered && <Input type='password' placeholder='Confirm Password' />}
            {/* {props.isRegistered ? <button type="submit">Login</button> : <button type="submit">Register</button>} */}
            <button type="submit">{props.isRegistered ? "Login" : "Register"}</button> 
        </form>
    );
}

export default Form;
