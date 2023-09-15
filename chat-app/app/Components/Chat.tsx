
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "@/firebase.config";

export const Chat = (props: any) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef: any = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy('createdAt'));
    const unsuscribe: any = onSnapshot(queryMessages, (snapshot) => {
      let messages: any = [];
      snapshot.forEach((doc: any) => {
        messages.push({ ...doc.data(), id: doc.id });
        console.log("messages",messages)
      });
      setMessages(messages);
    });
    return () => unsuscribe;
  },[]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(newMessage,"new");
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser?.displayName,
      room,
    });

    setNewMessage("");
  };
  return (
    <>
      <div style={{ textAlign: "center", color: "red", fontSize: "20px" }}>
        
        Welcome to: {room}
      </div>

      <div>
      { 
    messages.map( (msg :any) => {
        console.log(msg,"msg");
        return <div  key={msg.id} > 
        <span>{msg.user} : </span>
        {msg.text}</div>
    })
}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="type mesage"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};
