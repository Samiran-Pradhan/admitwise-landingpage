import React, { useState } from 'react'
import { baseurl } from '../App'
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const navigate = useNavigate();
    const handleSignup = (e) =>{
        e.preventDefault()
        fetch(baseurl+"api/v1/auth/register",{
            method:"post",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                "name": name,
                "email": email,
                "password": pass,
            })

        })

        .then((res)=>res.json()).then((value)=>{
            localStorage.setItem("auth",JSON.stringify(value));
            navigate('/')
        })
        .catch((error)=>console.log(error))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSignup}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input 
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Enter Name'
                autoComplete='off'
                name='email'
                className='form-control rounded-0'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input

                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter Email'
                autoComplete='off'
                name='email'
                className='form-control rounded-0'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input 
                type="password"
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                placeholder='Enter Password'
                name='password'
                className='form-control rounded-0'
                />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>
                Register
            </button>
            <p>Already have an Account</p>
            <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                LogIn
            </button>
        </form>
        </div>
    </div>
  )
}

export default SignUp