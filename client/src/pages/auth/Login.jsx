import React,{useState} from "react";
import useAuthStore from "../../store/auth-store";
import {useNavigate} from "react-router-dom"


const Login = () => {
  // Javscript

  
  const navigate = useNavigate()
  const [ form,setForm] = useState({
    email:"user@gmail.com",
    password:"123456"
    
  })

  const actionLogin = useAuthStore((state)=>state.actionLogin)
  
  const hdlOnChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const hdlSubmit = async(e)=>{
    e.preventDefault()
    // console.log(form);
   const role = await actionLogin(form)
   if (role) {
      roleRedirect(role)
   }
   roleRedirect(role)
    }

    const roleRedirect = (role) =>{
      // console.log(role);
      if (role === "ADMIN") {
          navigate('/admin')
      }else{
          navigate('/user')
      }
      
    }
  return (
    <div className="bg-green-50 flex w-full h-screen p-6 justify-center items-center">
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex">
    <div className="w-3/5 p-8">
      <h2 className="text-4xl font-bold text-gray-800">Coming Soon...</h2>
      <p className="text-gray-600 mt-4">Stay tuned for exciting updates. We are working hard to bring you new features.</p>
    </div>
    <div className="w-2/5 bg-gray-100 p-8 rounded-r-lg">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold mb-6 text-gray-800">Login</p>
        {/* Form Login */}
        <form onSubmit={hdlSubmit} className="w-full flex flex-col space-y-6">
          <input
            value={form.email}
            name="email"
            onChange={hdlOnChange}
            placeholder="Email"
            className="p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            value={form.password}
            onChange={hdlOnChange}
            placeholder="Password"
            type="password"
            className="p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
        {/* /Form Login */}
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;
