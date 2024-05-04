"use client"
import { useState } from "react"
import toast from "react-hot-toast"

const Signup = ({changePage,hanldeOpenAuthModel}) => {

    const [info,setInfo]=useState({
        fullName:"",
        email:"",
        password:"",
        tick:'',
    })

    const hanldeChange=(e)=>{
        setInfo({
           ...info,
            [e.target.name]:e.target.value
        })
    }

    const handlform=async()=>{
        if(!info.fullName || !info.email || !info.password){
            toast.error("Please fill the forms properly")
            return;
        }
        if(info.password.length<6){
            toast.error("Password should be atleast 6 characters long")
            return;
        }
        if(info.fullName.length<=5){
            toast.error("Fullname should be atleast 5 characters long")
            return;
        }
        
        if(info.tick!=='on'){
            toast.error("Please accept the terms and conditions")
            return;
        }
        
        let res= await fetch(`${process.env.API}/auth/registerAccount`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(info)
        })
        const statusCode=res.status;
        res=await res.json();
        if(statusCode==201){
            toast.success(res.message)
            hanldeOpenAuthModel()
        }else{
            toast.error(res.message)
        }
    }


  return (
    <div className=" bg-white w-1/2 md:1/2 lg:w-2/4 rounded-md p-6">
        <div className=" flex items-center justify-between">
            <h1 className=" font-bold text-xl">Sign up</h1>
            <h1 onClick={hanldeOpenAuthModel} className=" cursor-pointer">X</h1>
        </div>
        <div className=" mt-4">
            <input onChange={hanldeChange} placeholder="Your Name" type="text" name="fullName" id="" className=" py-3 px-4 border-[0.5px] border-gray-300 outline-none w-full text-sm mb-3" />
            <input onChange={hanldeChange} placeholder="Your email" type="email" name="email" id="" className=" py-3 px-4 border-[0.5px] border-gray-300 outline-none w-full text-sm mb-3" />
            <input onChange={hanldeChange} placeholder="Your password" type="password" name="password" id="" className=" py-3 px-4 border-[0.5px] border-gray-300 outline-none w-full text-sm mb-3" />
            <button onClick={handlform} className=" p-3 bg-orange-700 text-white w-full rounded-lg font-semibold text-center">Register</button>
            <div className=" flex  gap-2 mt-3">
                <input onChange={hanldeChange} type="checkbox" name="tick" id="" />
                <p className=" text-xs">By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <p className=" text-sm mt-3">
                Already have a new account? <button onClick={()=>{
                    changePage('login')
                }} className=" text-orange-500 font-bold ml-1">Login</button>
            </p>
        </div>
    </div>
  )
}

export default Signup