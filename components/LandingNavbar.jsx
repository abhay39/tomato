"use client"
import { navlinks } from "@/assests/NavLinks"
import {  LogOut, Menu, Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AuthPage from "./(authpage)/AuthPage"
import Cookies from "js-cookie"
import toast from "react-hot-toast"
import { addUserDetails } from "@/store/userInfo"


const LandingNavbar = () => {

    const [token,setToken]=useState();
    const [openAuthLinksss,setOpenAuthLinksss]=useState(false);
    const dispatch=useDispatch();

    const openAuthLinks=()=>{
        setOpenAuthLinksss(!openAuthLinksss);
    }


    const getuser=async(t)=>{
        let res= await fetch(`${process.env.API}/auth/getCurrentUserDetails/${t}`);
        res=await res.json();
        dispatch(addUserDetails(res))
    }
    useEffect(()=>{
        let t=Cookies.get('token');
        setToken(t);
        if(t){
            getuser(t)
        }
    },[token])



    


    const [openNav,setOpenNav]=useState(false);
    const [openAuthModel,setOpenAuthModel]=useState(false);

    const hanldeOpenAuthModel=()=>{
        setOpenAuthModel(!openAuthModel);
    }

    const hanldeOpenNav=()=>{
        setOpenNav(!openNav);
    }

    const [openNavForMiddle,setOpenNavForMiddle]=useState(false);

    const hanldeOpenNavForMiddle=()=>{
        setOpenNavForMiddle(!openNavForMiddle);
    }

    const pathName=usePathname();
    
    const user=useSelector(bimalesh=>bimalesh.userDetails);

  return (
    <nav className=" flex items-center justify-between py-3">
        <div className=" cursor-pointer">
            <Link href="/" className=" font-bold text-3xl  md:text-4xl  text-[#d6533c]">Tomato.</Link>
        </div>

        <div >
            <ul className=" hidden lg:flex flex-row md:gap-4 lg:gap-8 ">
                {
                    navlinks.map((item)=>{
                        return(
                            <Link className={`${pathName===item.link?" text-orange-700 font-bold":" "}`} href={item.link} key={item.id}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </ul> 
            <div className=" flex gap-5 md:hidden lg:hidden">
                <Search  className=" cursor-pointer"/>
                <Link href="/cart" className=" flex">
                    <ShoppingCart className=" cursor-pointer"/>
                    <p className=" bg-green-400  h-6 text-center -mt-3 -ml-3 p-1 rounded-full text-sm">{user?.userCart?.length}</p>
                </Link>
                <Menu onClick={hanldeOpenNav} className=" cursor-pointer"/>
            </div>
            
        </div>

        <div className=" hidden md:flex items-center gap-3">
            <div className=" hidden md:flex flex-row items-center md:gap-4 lg:gap-6">
                <Search  className=" cursor-pointer select-none"/>
                <Link href="/cart" className=" flex cursor-pointer" >
                    <ShoppingCart className=" cursor-pointer"/>
                    <p className=" bg-green-400  h-6 text-center -mt-3 -ml-3 p-1 rounded-full text-sm">{user?.userCart?.length}</p>
                </Link>
                {
                    token ? (<button onClick={openAuthLinks} className=" cursor-pointer border-[1px] border-orange-500 p-2 px-4 rounded-xl">Profile</button>) : (<button onClick={hanldeOpenAuthModel} className=" cursor-pointer border-[1px] border-orange-500 p-2 px-4 rounded-xl">Sign in</button>)
                }
            </div>
            <Menu onClick={hanldeOpenNavForMiddle} className=" hidden md:flex lg:hidden cursor-pointer"/>
        </div>
        {
            openNav && (
                <ul className=" fixed top-0 left-0 w-full flex items-center justify-center flex-col gap-16 min-h-screen font-semibold backdrop-blur-sm bg-slate-600">
                    <p onClick={hanldeOpenNav} className=" absolute top-3 right-3 cursor-pointer text-red-500 text-xl">X</p>
                    {
                        navlinks.map((item)=>{
                            return(
                                <Link className={`${pathName===item.link?" text-orange-700 font-bold":"  text-white"}`} href={item.link} key={item.id}>
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                    <div className=" flex flex-col items-center  gap-6">
                    {
                    token ? (<button onClick={openAuthLinks} className=" cursor-pointer text-white border-[1px] border-orange-500 p-2 px-4 rounded-xl">Profile</button>) : (<button onClick={hanldeOpenAuthModel} className=" cursor-pointer border-[1px] border-orange-500 p-2 px-4 rounded-xl text-white">Sign in</button>)
                }
                    </div>
                </ul>
                
            )
        }
        {
            openNavForMiddle && (
                <ul className=" fixed top-0 left-0 w-full flex items-center justify-center flex-col gap-16 min-h-screen font-semibold backdrop-blur-sm bg-slate-600" >
                    <p onClick={hanldeOpenNavForMiddle} className=" absolute top-3 right-3 cursor-pointer text-red-500 text-xl">X</p>
                    {
                        navlinks.map((item)=>{
                            return(
                                <Link className={`${pathName===item.link?" text-orange-700 font-bold":"  text-white"}`} href={item.link} key={item.id}>
                                    {item.name}
                                </Link>
                            )
                        })
                    }   
                </ul>
            )
        }
        {
            openAuthModel && (
                <div className=" min-h-screen backdrop-blur-sm fixed top-0 left-0 w-full flex items-center justify-center">
                    <AuthPage hanldeOpenAuthModel={hanldeOpenAuthModel}/>
                </div>
            )
        }
        {
                openAuthLinksss && (
                <div className=" absolute right-1 top-16 w-1/4">
                    <div className="bg-slate-200 flex flex-col gap-3 rounded-lg p-4 px-6">
                        <Link href="/profile" className=" flex cursor-pointer hover:bg-white p-3 rounded-md dur ease-in gap-3 items-center">
                            <User />
                            <h1 className=" font-semibold ">Profile</h1>
                        </Link>
                        <div onClick={()=>{
                                Cookies.remove('token');
                                toast.success("Logged out successfully")
                                window.location.reload();
                            }} className=" flex cursor-pointer hover:bg-white p-3 rounded-md dur ease-in gap-3 items-center">
                            <LogOut />
                            <h1  className=" font-semibold ">Logout</h1>
                        </div>
                    </div>
                </div>
            )
        }
    </nav>
  )
}

export default LandingNavbar