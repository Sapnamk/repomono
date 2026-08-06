import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function SignupPage() {

const navigate = useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSignup=()=>{

if(!name || !email || !password){
alert("Please fill all fields");
return;
}

alert("Account Created Successfully");

navigate("/");

}

return(

<div className="login-page">

<div className="login-card">

<h2>Create Account</h2>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="login-btn"
onClick={handleSignup}
>

Sign Up

</button>

<p>

Already have an account?

<Link to="/"> Login</Link>

</p>

</div>

</div>

);

}