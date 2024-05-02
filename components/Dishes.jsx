
import { food_list } from "@/public/2/assets"
import DishCard from "./DishCard"

const Dishes = () => {


  return (
    <section className=" bg-[#EBEBEB] px-3 py-6 md:px-6 lg:px-8 mt-6">
        <h1 className=" text-3xl  text-black font-bold">Top dishes near you</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                food_list.map((item)=>{
                    return (
                        <DishCard key={item._id} item={item}/>
                    )
                })
            }
        </div>
        
    </section>
  )
}

export default Dishes