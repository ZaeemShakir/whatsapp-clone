import React, { useEffect, useState, useSyncExternalStore } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  MicOutlined,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages,setMessages]=useState([]);
const [{user},dispatch]=useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).
      onSnapshot(snapshot=>setRoomName(
        snapshot.data().name
      ))

      db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp","asc")
      .onSnapshot(snapshot=>
          setMessages(snapshot.docs.map((doc)=>doc.data()))
        )
      setSeed(Math.floor(Math.random() * 5000));
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('rooms')
    .doc(roomId)
    .collection('messages').add({
      message:input,
      name:user.displayName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_header_info">
          <h3>{roomName}</h3>
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
{messages.map(message=>(
  <p className={`chat_message ${true && "chat_reciever"}`}>
  <span className="chatname">{message.name}</span>{message.message}
  <span className="timestamp">{new Date(message.timeStamp?.toDate()).toUTCString()}</span>
</p>
))}

        
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type a message"
          />
          <button onClick={sendMessage} type="submit">
            a
          </button>
        </form>
        <MicOutlined />
      </div>
    </div>
  );
}

export default Chat;
