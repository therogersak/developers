import React from "react";
import "./ProjectItem.css";
import LinkIcon from "@mui/icons-material/Link";


function ProjectItem({ img, title, id, link, skills }) {
  return (
    <>
      <div className="project_item">
        <img src={img} alt="title" />
        <a href={link} target="_blank">
          <div className="project__info">
            <LinkIcon />
          </div>
        </a>
      </div>
    </>
  );
}

export default ProjectItem;
