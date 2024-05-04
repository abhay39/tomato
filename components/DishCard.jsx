"use client"
import { addToCart } from "@/store/userInfo"
import { PlusIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"

const DishCard = ({item}) => {

    const [qty,setQty]=useState(1);
    const [isPlusOpened,setIsPlusOpened] = useState(false);
    const dispatch=useDispatch();
    const user=useSelector(bimalesh=>bimalesh.userDetails);

    
    

    const hanldeOpenPlus=()=>{
        setIsPlusOpened(!isPlusOpened);
    }

    const hanldeAddQty=()=>{
        if(qty>=9){
            toast.error("You cannot order more then 10 quantities!!")
        }else{
            setQty(qty+1);
            dispatch(addToCart({
                item:item,
                qty:qty,
            }))
            toast.success(`Cart updated successfully`)
        }
    }

    const hanldeRemoveQty=()=>{
        if(qty==1){
            toast.error("You cannot order less then 1 quantity!!")
        }else{
            setQty(qty-1);
            dispatch(addToCart({
                item:item,
                qty:qty,
            }))
            
            toast.success(`Cart updated successfully`)
        }
    }



  return (
    <div className=" relative mt-3 rounded-2xl bg-white ">
        <div className=" relative h-[250px]">
            <Image src={item.image} alt="food " height={300} width={1000} className=" h-[250px] rounded-t-2xl rounded-r-2xl object-cover w-full"/>
            <div  className=" absolute right-4 bottom-3 bg-white p-2 rounded-full cursor-pointer">
                {
                    isPlusOpened ? (
                        <div className=" bg-white p-2 rounded-2xl">
                            <button onClick={hanldeAddQty} className=" bg-green-500 text-white px-2 rounded-full w-auto">+</button>
                            <input type="number" className=" w-10 rounded-md bg-slate-100 text-center font-bold" value={qty} />
                            <button onClick={hanldeRemoveQty} className=" bg-red-500 text-white px-2 rounded-full w-auto">-</button>
                        </div>
                    ) :
                    (
                        <PlusIcon onClick={hanldeOpenPlus} />
                    )
                }
            </div>
        </div>
        <div className=" rounded-2xl px-6  flex flex-col gap-2">
            <div className=" flex justify-between items-center ">
                <h1 className=" font-bold mt-1 text-[18px]">{item.name}</h1>
                
            </div>
            <p className=" text-sm text-slate-400">{item.description}</p>
            <h1 className=" text-[#D5634E] text-xl font-semibold mb-2">${item.price}</h1>
        </div>
    </div>
  )
}

export default DishCard