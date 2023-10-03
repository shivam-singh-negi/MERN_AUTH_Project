import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signInStart,signInSuccess, signInFailure } from "../redux/user/userSlice";
import {useDispatch, useSelector} from "react-redux"
export default function SignIn() {

  const [formData, setFormData] = useState({});
  const {loading, error}=useSelector((state)=>state.user);
  const navigate= useNavigate();
  const dispatch=useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formData.email || !formData.password) {
      setError(true);
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        
      });

      const data = await res.json();
      if(data.sucess === false){
dispatch(signInFailure(data));
        return; 
      }
      dispatch(signInSuccess(data));
 navigate("/")
    }
     catch (error) {
      dispatch(signInFailure(error))     

    }

    // console.log(data);{message:"created user successfully"}
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-semibold text-3xl text-center my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       <input
          type="email"
          className="bg-slate-100 w-full p-3 rounded-xl"
          placeholder="Enter Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="bg-slate-100 w-full p-3  rounded-xl"
          placeholder="Enter Password"
          id="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading" : "Sign In"}{" "}
        </button>
      </form>

      <div className="flex mt-3 gap-2 p-3">
        <span>Already having an account?</span>
        <Link to="/signUp">
          <span className="text-blue-500 ">Sign Up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error ? error.message || 'Something went wrong!' : ''}
      </p>    </div>
  );
}
