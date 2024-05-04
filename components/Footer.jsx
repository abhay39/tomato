
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-[#323232] w-full lg:px-12 md:px-8 mt-4 rounded-lg px-4 py-6'>
        <div className=' grid lg:gap-12 md:gap-8 gap-4 justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
            <div className=" cursor-pointer ">
                <Link href="/" className=" font-bold text-3xl  md:text-4xl  text-[#d6533c]">Tomato.</Link>
                <p className=' text-white opacity-85 text-xs lg:text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odio magni in fugiat nostrum autem quo hic voluptatibus officia praesentium quos, doloribus pariatur nihil possimus dolorem doloremque ad expedita et.</p>
                <div className=' flex flex-row gap-5 mt-3'>
                    <div className=' rounded-full p-2 border-2 border-orange-400 w-auto'>
                        <Facebook color="white"/>
                    </div>
                    <div className=' rounded-full p-2 border-2 border-orange-400 w-auto'>
                        
                        <Twitter color="white"/>
                    </div>
                    <div className=' rounded-full p-2 border-2 border-orange-400 w-auto'>
                    
                        <Linkedin color="white"/>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className=' font-bold text-white text-2xl mb-4'>COMPANY</h1>
                <ul className=' flex text-white flex-col gap-3 opacity-75'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About us</Link>
                    <Link href="/delivery">Delivery</Link>
                    <Link href="/privacyPolicy">Privacy Policy</Link>
                </ul>
            </div>
            <div>
                <h1 className=' font-bold text-white text-2xl mb-4'>GET IN TOUCH</h1>
                <p className=' opacity-80 text-white'>+977-9876543210</p>
                <p className=' opacity-80 text-white'>contact@tomato.com</p>
            </div>
            
        </div>
        <hr className=' border-[0.5px] mt-3 border-white'/>
        <p className=' text-white opacity-80 text-center mt-2 '>Copyright 2024 &copy; Tomato.com - All Rights Reserved</p>
    </footer>
  )
}

export default Footer