import React, {useState} from 'react'

const App = () => {
  const [msg,setMsg]=useState("")
  const [reply,setReply]=useState("")

  const send=async()=>{
    const res=await fetch("http://localhost:5000/chat",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({message:msg})
    })

    const data=await res.json();
    setReply(data.reply);
  }


  return (
    <div>
      <input onChange={e=> setMsg(e.target.value)}/>
      <button onClick={send}>SEND</button>
      <p>{reply}</p>
    </div>
  )
}

export default App
