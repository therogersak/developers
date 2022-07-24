import React, { useState } from "react";
import "./Home.css";
import { Avatar } from "@mui/material";
import LoadingBar from "react-top-loading-bar";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import Message from "./Message/Message";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Home() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  const buttonHandler = ({ isActive }) => {
    return {
      background: isActive ? "var(--color-5)" : "",
    };
  };


  return (
    <>
     <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="home">
        <div className="home__top">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTa1o13qHi0hBEUMcOCKQhrrNSr8pSUmAoA&usqp=CAU" />
          <div className="user__name">
            <h3>Rogers @k</h3>
          </div>
          <div className="user__info">
            <span>
              Devloper | Ethical Hacker | Programmer | Corder | Bloggar |
              Youtuber
            </span>
          </div>
          <div className="user__accounts">
            <a href="https://instagram.com/therogersak" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://twitter.com/therogersak" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://linkedin.com/in/therogersak" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://t.me/therogersak" target="_blank">
              <TelegramIcon />
            </a>
          </div>
        </div>
        <div className="home__mid">
          <div className="work__exe mid">
            <h3>5+</h3>
            <span>Years Of Work</span>
          </div>
          <div className="projectss mid">
            <h3>200+</h3>
            <span>Complete Projects</span>
          </div>
          <div className="costomers mid">
            <h3>1000+</h3>
            <span>Satisfied Customers</span>
          </div>
        </div>
        <div className="home__bottom">
          <a
            href="https://therogersak.github.io/Rogers-Resume/"
            target="_blank"
          >
            {" "}
            <button className="button">Resume</button>
          </a>
          <div className="contact__box">
            <div className="gmail contact">
             <a href="mailto:therogersak@gmail.com&subject= Hello  Guys How Are You" target="_blank"> <EmailOutlinedIcon /></a>
            </div>
            <div className="whatsapp contact">
              <a href="https://api.whatsapp.com/send?phone=6375532898" target="_blank"><WhatsappOutlinedIcon /></a>
            </div>
          </div>
        </div>

        <div className="message_btn" onClick={() => setShow(true)}>
          <MapsUgcOutlinedIcon />
        </div>
        <Message show={show} setShow={setShow} />

        <div className="home__bottom_btn">
          <NavLink to="/projects" className="link" style={buttonHandler}>
            <Button variant="outlined" size="medium" onClick={() => setProgress(100)}>
              Projects
            </Button>
          </NavLink>
          <NavLink to="/skills" className="link" style={buttonHandler}>
            <Button variant="outlined" size="medium" onClick={() => setProgress(100)}>
              Skills
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
