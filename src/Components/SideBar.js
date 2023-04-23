import React, { useEffect, useState }  from "react";
import "./SideBar.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SideBarChat from "./SideBarChat";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

function SideBar() {
  const [room,setRoom]=useState([]);
const[{user},dispatch]=useStateValue();

useEffect(()=>{
db.collection('rooms').onSnapshot(snapshot=>(
  setRoom(snapshot.docs.map(doc=>(
    {
      id:doc.id,
      data:doc.data(),
    }
  )))
))

},[])
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="search_container">
          <SearchOutlined />
          <input
            placeholder="search to start a new chat"
            type="text"
            className="Searchinput"
          />
        </div>
      </div>
      <div className="sidebar_chat">
        <SideBarChat addNewChat/>
        {room.map(room=>(
          <SideBarChat key={room.id} id={room.id} name={room.data.name}/>)
        )}
      </div>
    </div>
  );
}

export default SideBar;
