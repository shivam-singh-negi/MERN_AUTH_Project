import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Navbar from "./components/Navbar";



export default function App() {
  return (
 <>
 <BrowserRouter>
 <Navbar/>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/signIn" element={<SignIn/>}/>
    <Route path="/signUp" element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>
 
 </>
  )
}
