import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Header() {

  const theameHandler = () => {

    document.body.classList.toggle("dark");
  }
  return (
    <>
      <div className="header">
        <div className="header__right">
          <a href="https://github.com/therogersak" target="_blank">
           
            <GitHubIcon />
          </a>
          <NotificationsNoneOutlinedIcon />
          <SettingsOutlinedIcon onClick={() => theameHandler()} />
        </div>
      </div>
    </>
  );
}

export default Header;
