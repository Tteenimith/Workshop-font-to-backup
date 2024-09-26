import {create} from "zustand";
import { login, register } from "../api/auth";
import {toast} from "react-toastify"
import {createJSONStorage, persist} from "zustand/middleware"

const useAuthStore = create(persist((set)=>({
    name:"store",
    user:null,
    token:null,

    actionRegister : async(form)=>{
        try {
            const resp = await register(form)
            console.log(resp.data.message);
            toast.success(resp.data.message)
            
        } catch (err) {
            console.log(err.response.data.message);
            toast.error(err.response.data.message)
            
        }
    },
    actionLogin : async(form)=>{
        try {
            const resp = await login(form)
            console.log(resp.data.user.user.role);
            // console.log(resp.data.token);
            set({
                user: resp.data.user,
                token: resp.data.token
            })
            return resp.data.user.user.role
        } catch (err) {
            console.log(err.response.data.message);
            
            toast.error(err.response.data.message)
            
        }
    },
    actionLogout   : ()=>{
        localStorage.clear()
        set({user:null,token:null})
    }
}),{
    name:"user-store",
    storage: createJSONStorage(()=>localStorage)
}))



export default useAuthStore