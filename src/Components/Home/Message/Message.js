import React, { useState, useEffect } from "react";
import "./Message.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Avatar } from "@mui/material";
import db from "../../../Firebase/firebase";
import firebase from "firebase/compat/app";
import User from "./User/User";
function Message({ show, setShow }) {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const messageHandler = (e) => {
    e.preventDefault();
    db.collection("chat").add({
      name: "User",
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  };

  useEffect(() => {
    db.collection("chat")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  console.log(data);
  return (
    <>
      <div className={show ? "message message_show" : "message"}>
        <div className="close" onClick={() => setShow(false)}>

          <CloseOutlinedIcon />
        </div>

        <div className="message__mid">
          {data &&
            data.map((data) => (
              <User message={data.data.message} name={data.data.name} />
            ))}
        </div>

        <form className="message__input" onSubmit={(e) => messageHandler(e)}>
          <ModeEditOutlineOutlinedIcon />
          <input
            type="text"
            name="message"
            id="message__sender"
            placeholder="Send Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

export default Message;
