"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { useRouter } from 'next/navigation';

const defaultProps = {
  center: {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  },
  zoom: 5
};

const page = ({ params }) => {
  
  const GOOGLE_MAPS_KEY='AIzaSyB6rkjRYrmo9qwxlWPdYbUyczMjghLx86g';
  const userData=useSelector(item=>item.userDetails);
  // console.log(params.id)
  const [totalPrice,setTotalPrice]=useState(0);
  const [deliveryPrice,setDeliveryPrice]=useState(5);
  const [finalPrice,setFinalPrice]=useState(params.id);
  const router=useRouter();

  useEffect(() => {
    let totalsum = 0;
    userData.userCart.forEach((item) => {
        totalsum += item.item.price * item.qty;
    });
    setTotalPrice(totalsum);
}, [userData.userCart]);


  return (
    <section className=' bg-slate-200 px-12 py-10'>
      <div className=' flex flex-row gap-10  mt-5'>
        <div className=' w-1/2 '>
          <h1 className=' font-bold text-2xl'>Delivery Information</h1>

          <div className=' flex mt-6 flex-col gap-5 '>
            <div className=' flex gap-3'>
              <input type="text" placeholder='First Name' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
              <input type="text" placeholder='Last Name' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
            </div>
            <div className=' flex gap-3'>
              <input readOnly value={userData?.userInfo?.email} type="email" placeholder='Email Address' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
            </div>
            <div className=' flex gap-3'>
              <input type="text" placeholder='Street' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
            </div>
            <div className=' flex gap-3'>
              <input type="text" placeholder='City' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
              <input type="text" placeholder='Street' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
            </div>
            <div className=' flex gap-3'>
              <input type="text" placeholder='Zip Code' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
              <input type="text" placeholder='Country' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
            </div>
            <div className=' flex gap-3'>
              <input type="number" max={10} placeholder='Street' name="" id="" className=' border-[0.5px] border-slate-300 p-2 text-xs lg:text-sm outline-none w-full' />
            </div>
              

          </div>
        </div>
        <div className=' w-1/2'>
          <div className=" mt-10 flex flex-col lg:flex-row gap-10 justify-between " >
            <div className=" w-full ">
              <h1 className=" text-black text-2xl font-bold ">Cart Totals</h1>
              <div className=" flex mt-3 items-center justify-between ">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>
              <hr className=" border-gray-500" />
              <div className=" flex mt-3 items-center justify-between ">
                <p>Delivery Fee</p>
                <p>${deliveryPrice}</p>
              </div>
              <hr className=" border-gray-500" />
              <div className=" flex font-bold mt-3 items-center justify-between ">
                <p>Total</p>
                <p>${finalPrice}</p>
              </div>

              <button className=" bg-[#C04F28] mt-4 text-center p-2 rounded-lg text-white" onClick={() => {
                router.push(`/cart/${finalPrice}`);
              }}>PROCEED TO PAYMENT</button>
            </div>
            
          </div>
        </div>
      </div>
      {/* <div className=' h-[600px] w-full'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          
        >
          
      </GoogleMapReact>
      </div> */}
    </section>
  )
}

export default page