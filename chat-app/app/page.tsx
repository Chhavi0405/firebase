'use client'
import { Auth } from "./Components/Auth";
import Cookies from 'universal-cookie'
import {useState ,useRef, MutableRefObject} from 'react'
import { Chat } from "./Components/Chat";
const cookies =new Cookies();
export default function Home() {
 const [isAuth,setIsAuth] = useState(cookies.get('auth-token'))
 const [room,setRoom] = useState("")
 const [isInChat,setIsInChat] = useState(null)

 const roomInputRef : any= useRef()
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
      <label style={{textAlign:'left' , color:'blue'}}> Enter room name&nbsp;</label>
      {/* <input  onChange={(e:any)=>setRoom(e.target.value)}/>  */}
      <input ref={roomInputRef}/>
      &nbsp;
      <div style={{border:'2px' }}>
      <button  onClick={()=>setRoom(roomInputRef.current.value)} >Enter chat</button>
      </div>
    </div>
  )}
  </>
 )
 
}
