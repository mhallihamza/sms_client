import { useState, useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../redux/authActions";
function Login() {
  const user = useSelector((state:any) => state.user) as any;
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch() as any;
  const navigate = useNavigate();
  useEffect(() => {
    if(user){
      navigate('/dashboard')
    }
  },[])
    async function handleClick(e:any) {
      e.preventDefault();
      console.log(email);
      console.log(password);
      try {
        dispatch(loginStart())
      const  { data: user } = await axios.post('http://localhost:3000/auth/login', {
        email, password
      })
      if(user) {
        dispatch(loginSuccess(user))
        navigate('/dashboard')

      }
      } catch(err) {
        dispatch(loginFailure(err))
      }
    }
    const onLastInputKey = (e:any) => {
      if(e.key === "Enter"){
         passwordRef.current?.blur()
         handleClick(e);
      }
    }
  return (
    <div className="flex w-full min-h-screen">
        <div className="w-2/3 bg-slate-400">
          <img className="object-cover h-full" src="https://app.salonmanagementapp.com/static/media/unauth_image3.86e8d262.jpg"></img>
        </div>
        <div className="w-1/3 px-8 py-16 bg-neutral-50">
          <div className="flex justify-center">
            <h1 className="text-5xl font-poppins font-bold text-orange-500">Salon<span className="text-violet-300">Ease</span></h1>
          </div>
          <div className="mt-16">
            <form onSubmit={handleClick}>
              <div className="relative bg-white rounded-lg h-14 mb-4 w-full shadow-sm">
                <input placeholder="E-mail / Phone number *" type="text" id="email" autoComplete="off" required onBlur={() => setIsFocused1(false)} onFocus={() => setIsFocused1(true)} value={email} onChange={(e) => setEmail(e.target.value)}  className={`w-full px-2 ${isFocused1 || email ? "placeholder-transparent absolute bottom-2" : "h-full placeholder-gray-500"} outline-none rounded-lg`}></input>
                <label htmlFor="email" className={`absolute text-sm top-1 left-2 ${isFocused1 ? "text-orange-600" : email.length ? "text-gray-500" : "hidden"} `}>E-mail / Phone number *</label>
              </div>
              <div className="relative bg-white rounded-lg h-14 mb-4 w-full shadow-sm">
                <input ref={passwordRef} onKeyDown={onLastInputKey} placeholder="Password *" type="password" id="password" autoComplete="off" required onBlur={() => setIsFocused2(false)} onFocus={() => setIsFocused2(true)} value={password} onChange={(e) => setPassword(e.target.value)}  className={`w-full px-2 ${isFocused2 || password ? "placeholder-transparent absolute bottom-2" : "h-full placeholder-gray-500"} outline-none rounded-lg`}></input>
                <label htmlFor="password" className={`absolute text-sm top-1 left-2 ${isFocused2 ? "text-orange-600" : password.length ? "text-gray-500" : "hidden"}`}>Password *</label>
              </div>
              <div className="flex items-center gap-4 my-6">
                <input className="w-4 h-4" id="remember" type="checkbox"></input>
                <label htmlFor="remember">Remember me</label>
              </div>
              <button className="text-white bg-orange-400 w-full py-[0.7rem] rounded-md font-inter" type="submit">Log in</button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <button className="flex justify-center bg-white py-1 rounded-3xl shadow-md"><FcGoogle className="h-8 w-8"/></button>
            <button className="flex justify-center bg-white py-1 rounded-3xl shadow-md"><FaApple className="h-8 w-8"/></button>
          </div>
          <button className="text-orange-600 font-medium w-full text-center mt-4">Haven't you got an account yet? Register now!</button>
          <button className="text-green-600 font-medium w-full text-center mt-5 ">Forgot password / Reset password</button>
        </div>
    </div>
  )
}

export default Login