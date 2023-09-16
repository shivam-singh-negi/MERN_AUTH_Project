import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='font-semibold text-3xl text-center my-7'>
        SignUp
      </h1>
<form action="" method="post" className='flex flex-col gap-4'>
<input type="text" className="bg-slate-100 w-full p-3  rounded-xl" placeholder='Enter Username' id="username"/>
<input type="text" className="bg-slate-100 w-full p-3 rounded-xl" placeholder='Enter Email' id="email"/>
<input type="text" className="bg-slate-100 w-full p-3  rounded-xl" placeholder='Enter Password' id="password"/>
<button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
<div className="flex mt-3 gap-2 p-3">
  <span>Already having an account?</span> 
 <Link to="/signIn"> <span className='text-blue-500 '>Sign In</span></Link>
</div>
</form>




    </div>
  )
}
