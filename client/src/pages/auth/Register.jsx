import React,{useState} from "react";
import validateRegister from "../../utils/validator";
import useAuthStore from "../../store/auth-store";

const initialState = {
  email:"",
  password:"",
  confirmPassword:""
}

const Register = () => {
  // Javascript
  // import Zustand
  const name = useAuthStore((state)=> state.name)
  const actionRegister = useAuthStore((state)=> state.actionRegister)
  console.log(name);
  
  const [ form,setForm] = useState({
    email:"",
    password:"",
    confirmPassword:""
  })
  const [formErrors , setFormErrors] = useState({})

  const hdlOnChange = (e) =>{
    console.log(e.target.name,e.target.value);
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const hdlSubmit = (e)=>{
    e.preventDefault()
    const error = validateRegister(form)
    if (error) {
        return setFormErrors(error)
      
    }
    actionRegister(form)
    
    setForm(initialState)
    setFormErrors({})
  }
  return (
    <div className="bg-green-50 flex w-full h-screen p-6 justify-center items-center">
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex p-8">
    <div className="w-3/5 flex items-center">
      <h2 className="text-4xl font-bold text-gray-800">Coming Soon...</h2>
    </div>
    <div className="w-2/5 bg-gray-100 p-8 rounded-r-lg">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold mb-6 text-gray-800">Register</p>
        {/* Form Register */}
        <form onSubmit={hdlSubmit} className="w-full flex flex-col space-y-6">
          <div className="flex flex-col">
            <input
              value={form.email}
              name="email"
              onChange={hdlOnChange}
              placeholder="Email"
              className="p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.email && (
              <span className="text-red-600 text-xs mt-1">
                {formErrors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              value={form.password}
              name="password"
              type="password"
              onChange={hdlOnChange}
              placeholder="Password"
              className="p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.password && (
              <span className="text-red-600 text-xs mt-1">
                {formErrors.password}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              value={form.confirmPassword}
              name="confirmPassword"
              type="password"
              onChange={hdlOnChange}
              placeholder="Confirm Password"
              className="p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formErrors.confirmPassword && (
              <span className="text-red-600 text-xs mt-1">
                {formErrors.confirmPassword}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-700 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Register
          </button>
        </form>
        {/* /Form Register */}
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;
