import Image from "next/image"

const HeroSection = () => {
  return (
    <div style={{
        backgroundImage:'url(/2/header_img.png)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'500px',
        width:'100%',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        color:'white',
        borderRadius:'20px',
        marginTop:'20px'
    }} className=" px-8 md:px-16 lg:px-24 py-8">
        <div className=" flex text-center md:text-justify flex-col gap-4">
            <h1 className=" text-5xl font-semibold">Order Your</h1>
            <h1 className=" text-4xl font-semibold">Favourite food here</h1>
            <p className=" lg:w-1/2 text-justify">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
            <button className=" bg-white rounded-2xl md:w-[150px] p-3 text-black text-sm cursor-pointer  duration-700 ease-in-out">View Menu</button>
        </div>
    </div>
  )
}

export default HeroSection