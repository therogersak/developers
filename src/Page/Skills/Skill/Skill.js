import React from "react";
import "./Skill.css";

function Skill({ Name, Skill, Color }) {
    
  return (
    <>
      <div className="skill__container">
        <div
          className="skill"
          style={{ width: `${Skill}`, background: `${Color}`, height:'100%' , borderRadius: '30px 0 0px 30px' }}
        ><span>{Skill}</span></div>
        <div className="skill_name">
            {Name}
        </div>
      </div>
    </>
  );
}

export default Skill;
