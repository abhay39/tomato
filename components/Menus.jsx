"use client"
import { menu_list } from "@/public/2/assets"
import Image from "next/image"
import { useSelector } from "react-redux"

const Menus = () => {



  return (
    <section className=" bg-slate-100  px-6 md:px-8 lg:px-12 py-10 mt-5 w-full">
        <h1 className=" text-3xl  text-black font-bold">Explore our menu</h1>
        <p className=" text-xs lg:text-sm w-full md:3/4 lg:w-1/2">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>

        <div className=" mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div key={index} onClick={()=>{
                            console.log(item.menu_name)
                        }} className=" flex items-center flex-col cursor-pointer">
                            <Image src={item.menu_image} alt={item.menu_name} height={100} width={100} loading="lazy" />
                            <h1 className=" text-[17px]">{item.menu_name}</h1>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Menus