'use client'
import {auth,provider} from  '../../firebase.config'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'

const cookies =new Cookies();

export const Auth =()=> {
  const signInWithGoogle = async ()=>{
    try{
    const result =    await signInWithPopup(auth,provider)
    cookies.set("auth-token",result.user.refreshToken)
    }
    catch(err:any){
        console.error(err)
    }
  }
  return (
    <>
    <p style={{textAlign:'center', color:'red'}}>SignIn with Google to continue</p>
    <br/>
    <div style={{textAlign:'center',alignItems:'center'}} >
    <button type='button' onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
    </>
  )
}
