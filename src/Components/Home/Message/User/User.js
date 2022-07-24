import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";

function User({ name, message }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []);

  return (
    <>
      <div className="message__reciver">
        <Avatar
          src={`https://avatars.dicebear.com/api/adventurer/${seed}.svg`}
        />
        <div className="message__box">
          <span>{name}</span>
          <p>{message}</p>
        </div>
        <div />
      </div>
    </>
  );
}

export default User;
