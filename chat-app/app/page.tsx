'use client'
import { Auth } from "./Components/Auth";
import Cookies from 'universal-cookie'
import {useState} from 'react'
const cookies =new Cookies();
export default function Home() {
 const [isAuth,setIsAuth] = useState(cookies.get('auth-token'))
 const [room,setRoom] = useState()
 if(!isAuth){
  return (
    <>
    <Auth/>
    </>
  )
 }
 return(
  <>
  {room ? (
    <div>chat</div>
  ):(
    <div>
      <label style={{textAlign:'left' , color:'blue'}}>Enter room name&nbsp;</label>
      <input /> 
      &nbsp;
      <div style={{border:'2px' }}>
      <button>Enter chat</button>
      </div>
    </div>
  )}
  </>
 )
 
}
