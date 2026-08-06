import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function ForgotPassword(){

const[email,setEmail]=useState("");

const handleReset=()=>{

if(email===""){
alert("Enter your email");
return;
}

alert("Password reset link sent (Demo)");

}

return(

<div className="login-page">

<div className="login-card">

<h2>Forgot Password</h2>

<p>Enter your email address</p>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button
className="login-btn"
onClick={handleReset}
>

Send Reset Link

</button>

<p>

<Link to="/">Back to Login</Link>

</p>

</div>

</div>

);

}