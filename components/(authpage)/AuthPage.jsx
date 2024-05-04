"use client"
import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"

const AuthPage = ({hanldeOpenAuthModel}) => {
    const [page,setPage]=useState('login')

    const changePage=(page)=>{
        setPage(page)
    }

  return (
    <div className=" w-full flex items-center justify-center">
        {
            page==='login' ? (
                <Login hanldeOpenAuthModel={hanldeOpenAuthModel} changePage={changePage}/>
            ):
            (
                <Signup hanldeOpenAuthModel={hanldeOpenAuthModel} changePage={changePage}/>
            )
        }
    </div>
  )
}

export default AuthPage