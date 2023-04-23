import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function Chat() {
    const[ input,setInput]=useState("");
  const [seed, setSeed] = useState("");
  const {roomId}=useParams();
const [roomName,setRoomName]=useState("");

useEffect(()=>{
if(roomId){
  
}
},[roomId])
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
 const sendMessage=(e)=>{
    e.preventDefault();
    setInput('');
 }
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_header_info">
          <h3>room name</h3>
          <p>last seen....</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chatname">name</span>hey guys
          <span className="timestamp">time</span>
        </p>
      </div>
      <div className="chat_footer">
      <InsertEmoticon/>
      <form>
      <input 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      type="text"
      placeholder="type a message"/>
      <button onClick={sendMessage} type="submit">
        a
      </button>
      </form>
        <MicOutlined/>
      </div>
    </div>
  );
}

export default Chat;
