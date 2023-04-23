import React, { useEffect, useState } from "react";
import {  Link } from "react-router-dom";
import "./SideBarChat.css";
import { Avatar } from "@mui/material";
import db from "../firebase"

function SideBarChat({ addNewChat,id,name }) {
  const [seed, setSeed] = useState("");


  useEffect(() => {
  setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createNewChat = () => {
const roomName=prompt("Please enter name for chat");
if(roomName){
    //do some stuff
    db.collection('rooms').add({
      name:roomName,
    })
}
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    <div className="sidebarchat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarchat_info">
        <h2>{name}</h2>
        <p>last Message....</p>
      </div>
    </div></Link>
  ) : (
    <div 
    className="sidebarchat"
     onClick={createNewChat}
     
     >
      <h1>Add New Chat</h1>
    </div>
  );
}

export default SideBarChat;
