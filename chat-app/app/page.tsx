'use client'
import { Auth } from "./Components/Auth";
import Cookies from 'universal-cookie'
import {useState ,useRef, MutableRefObject} from 'react'
import { Chat } from "./Components/Chat";
// import { Route,Routes } from "react-dom";
const cookies =new Cookies();
export default function Home() {
 const [isAuth,setIsAuth] = useState(cookies.get('auth-token'))
 const [room,setRoom] = useState("")
//  const [isInChat,setIsInChat] = useState(null)

 const roomInputRef : any= useRef('null')
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
    <Chat room = {room}/>
  ):(
    <div>
      <div>
      <label style={{textAlign:'left' , color:'blue'}}> Enter room name &nbsp;</label>
      {/* <input  onChange={(e:any)=>setRoom(e.target.value)}/>  */}
      <input ref={roomInputRef}/>
      &nbsp;
      </div>
      <span style={{border:'2px' }}>
      <button  onClick={()=>setRoom(roomInputRef.current.value)} >Enter chat</button>
      </span>
    </div>
  )}



  </>
 )
 
}
