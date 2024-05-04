"use client"
import { removeItemFromCart } from "@/store/userInfo";
import Cookies from "js-cookie";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"

const page = () => {

    const userData=useSelector(item=>item.userDetails);
    const [totalPrice,setTotalPrice]=useState(0);
    const [deliveryPrice,setDeliveryPrice]=useState(5);
    const [finalPrice,setFinalPrice]=useState();
    const dispatch=useDispatch();
    const router=useRouter();

    const [token,setToken]=useState();

    useLayoutEffect(()=>{
        let t=Cookies.get('token');
        setToken(t);
    },[token])

    useEffect(() => {
        let totalsum = 0;
        userData.userCart.forEach((item) => {
            totalsum += item.item.price * item.qty;
        });
        setTotalPrice(totalsum);
        
        setFinalPrice(totalsum + deliveryPrice);
    }, [userData.userCart]);

    const removeFromCart=(item)=>{
        dispatch(removeItemFromCart(item))
    }
    

    return (
        <section className=" w-full bg-[#ffffff] py-6 px-4 md:px-8 lg:px-12 ">
            <table className="w-full">
                <tbody>
                    <tr className="">
                        <th className="hidden md:table-cell font-light text-left">Items</th>
                        <th className="font-light text-left">Title</th>
                        <th className="font-light text-left">Price</th>
                        <th className="font-light text-left">Qty</th>
                        <th className="font-light text-left">Total</th>
                        <th className="font-light text-center">Remove</th>
                    </tr>

                    {
                        userData?.userCart?.length>0 && (
                            userData?.userCart?.map((item)=>{
                                return (
                                    <tr className="">
                                        <td className="hidden md:table-cell">
                                            <Image loading="lazy" src={item.item.image} alt="food" height={100} width={100} className="rounded-full h-16 w-16 object-cover" />
                                        </td>
                                        <td className="font-semibold">{item.item.name}</td>
                                        <td className="font-semibold">${item.item.price}</td>
                                        <td className="font-semibold">{item.qty}</td>
                                        <td className="font-semibold">${item.item.price * item.qty}</td>
                                        <td onClick={()=>{
                                            removeFromCart(item)
                                        }} className="font-semibold text-center cursor-pointer text-red-700">X</td>
                                    </tr>
                                )
                            })
                        )
                         
                    }
                </tbody>
                
            </table>
            {
                userData.userCart.length==0 && (<h1 className=" text-3xl mt-3 font-bold text-center">No Items in cart</h1>)
            }



            <div className=" mt-10 flex flex-col lg:flex-row gap-10 justify-between " >
                <div className=" w-full lg:w-1/2">
                    <h1 className=" text-black text-2xl font-bold ">Cart Totals</h1>
                    <div className=" flex mt-3 items-center justify-between ">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                    </div>
                    <hr className=" " />
                    <div className=" flex mt-3 items-center justify-between ">
                        <p>Delivery Fee</p>
                        <p>${deliveryPrice}</p>
                    </div>
                    <hr className=" " />
                    <div className=" flex font-bold mt-3 items-center justify-between ">
                        <p>Total</p>
                        <p>${finalPrice}</p>
                    </div>

                    <button className=" bg-[#C04F28] mt-4 text-center p-2 rounded-lg text-white" onClick={()=>{
                        if(token){
                            router.push(`/cart/${finalPrice}`);
                        }else{
                            toast.error("Please login before going to checkout page")
                            router.push('/');
                        }
                    }}>PROCEED TO CHECKOUT</button>
                </div>
                <div className=" w-full lg:w-1/2 text-sm lg:px-10">
                    <p>If you have a promo code, Enter it here</p>
                    <div className=" flex items-center">
                        <input className=" bg-slate-400 p-2 px-3 w-[80%] border-none rounded-lg outline-none text-white" type="text" name="" id="" />
                        <button className=" bg-black w-[150px] p-2 rounded-md text-white text-center">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page