"use client"
import { navlinks } from "@/assests/NavLinks"
import {  Menu, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useSelector } from "react-redux"


const LandingNavbar = () => {

    const [openNav,setOpenNav]=useState(false);

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
                            <Link className={`${pathName===item.link?" text-orange-700 font-bold":" t"}`} href={item.link} key={item.id}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </ul> 
            <div className=" flex gap-5 md:hidden lg:hidden">
                <Search  className=" cursor-pointer"/>
                <div className=" bg-red-700">
                    <ShoppingCart className=" cursor-pointer"/>
                    <p className=" bg-green-400 p-1 rounded-full text-sm">{user?.userCart?.length}</p>
                </div>
                <Menu onClick={hanldeOpenNav} className=" cursor-pointer"/>
            </div>
            
        </div>

        <div className=" hidden md:flex items-center gap-3">
            <div className=" hidden md:flex flex-row items-center md:gap-4 lg:gap-6">
                <Search  className=" cursor-pointer select-none"/>
                <div className=" flex cursor-pointer" >
                    <ShoppingCart className=" cursor-pointer"/>
                    <p className=" bg-green-400 w-4 h-6 text-center -mt-3 -ml-3 p-1 rounded-full text-sm">{user?.userCart?.length}</p>
                </div>
                <button className=" cursor-pointer border-[1px] border-orange-500 p-2 px-4 rounded-xl">Sign in</button>
            </div>
            <Menu onClick={hanldeOpenNavForMiddle} className=" hidden md:flex lg:hidden cursor-pointer"/>
        </div>
        {
            openNav && (
                <ul className=" fixed top-0 left-0 w-full flex items-center justify-center flex-col gap-16 min-h-screen font-semibold backdrop-blur-sm">
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
                        <button className=" cursor-pointer border-[1px] border-orange-500 p-2 px-4 rounded-xl text-white">Sign in</button>
                    </div>
                </ul>
                
            )
        }
        {
            openNavForMiddle && (
                <ul className=" fixed top-0 left-0 w-full flex items-center justify-center flex-col gap-16 min-h-screen font-semibold backdrop-blur-sm">
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
    </nav>
  )
}

export default LandingNavbar