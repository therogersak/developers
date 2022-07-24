import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Search from "./Search/Search";

function Header() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onkeydown(event) {
      if (event.key === "i" && (event.metaKey || event.ctrlKey)) {
        setShow(!show);
      }
    }
    window.addEventListener("keydown", onkeydown);
    return () => {
      setProgress(100);
      window.removeEventListener("keydown", onkeydown);
    };
  }, [show]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="header">
        <div className="header__right">
          <div className="search__bar" onClick={() => setShow(true)}>
            <SearchIcon />
            <span>Search...</span>
            <button>crtl+i</button>
          </div>
         <a href="https://github.com/therogersak" target="_blank"> <GitHubIcon /></a>
          <NotificationsNoneOutlinedIcon />
          <SettingsOutlinedIcon />
        </div>

        <div className="search__container">
          <Search show={show} />
        </div>
        <div
          className={show ? "layer layer__show" : "layer"}
          onClick={() => {
            setShow(false);
            setProgress(100);
          }}
        ></div>
      </div>
    </>
  );
}

export default Header;
