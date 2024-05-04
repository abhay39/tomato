"use client"
import { addUserDetails } from "@/store/userInfo";
import Cookies from "js-cookie";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const layout = ({children}) => {
  const pathNamee=usePathname();
  const [token,setToken]=useState();
  const router=useRouter();
  
  const dispatch=useDispatch();


    const getuser=async(t)=>{
        let res= await fetch(`${process.env.API}/auth/getCurrentUserDetails/${t}`);
        res=await res.json();
        dispatch(addUserDetails(res))
    }
  

    useEffect(()=>{
      let t=Cookies.get('token');
      setToken(t);
      if(!t){
        toast.error("You are not authorized to access profile page.")
        setTimeout(()=>{
          router.push("/")
        },1000)
      }
      if(t){
        getuser(t)
      }
    },[token])

    

  return (
    <section className=" flex gap-4 min-h-screen">
        
        <div className=" bg-slate-50 flex flex-col gap-10 w-1/5 py-8 px-4"> 
          <Link href="/profile" className={`${pathNamee==="/profile"?"text-red-500":""}`}>Profile</Link>
          <Link href="/profile/myOrders" className={`${pathNamee==="/profile/myOrders"?"text-red-500":""}`}>My Orders</Link>
        </div>
        <div>
          {children}
        </div>
    </section>
  )
}

export default layout