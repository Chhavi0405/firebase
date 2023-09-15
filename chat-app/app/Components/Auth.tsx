"use client";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
// import { useRouter } from 'next/router'
const cookies = new Cookies();

export const Auth = () => {
  // const router = useRouter();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      location.reload()
      
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <>
      <div>
        <p
          style={{
            textAlign: "center",
            margin: "25px",
            color: "red",
            lineHeight: "200%",
            background: "lightblue",
            alignSelf: "center",
            border: "double",
            blockSize: "inline",
          }}
        >
        
          Welcome to Chat App
        </p>
      </div>
      <div style={{ textAlign: "center", alignItems: "center" }}>
       SignIn with Google to continue...
      </div>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          border: "1px solid",
          margin: "50px",
        }}
      >
        <button type="submit" onClick={signInWithGoogle}>
     
          Sign In With Google
        </button>
      </div>
    </>
  );
};
