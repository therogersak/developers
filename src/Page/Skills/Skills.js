import React from 'react'
import Skill from './Skill/Skill';
import './Skills.css';

function Skills() {
  return (
    <>
    <div className="skills">
        <Skill Name="HTML" Skill="95%" Color="#e34c26"/>
        <Skill Name="CSS" Skill='88%' Color="#264de4"/>
        <Skill Name="JAVASCRIPT" Skill='70%' Color="#F0DB4F"/>
        <Skill Name="JQUERY" Skill='55%' Color="#323330"/>
        <Skill Name="SASS" Skill='83%' Color="#cc6699"/>
        <Skill Name="REACT-JS" Skill='90%' Color="#61DBFB"/>
        <Skill Name="REDUX" Skill='83%' Color="#764abc"/>
        <Skill Name="NEXT-JS" Skill='60%' Color="#5e7693"/>
        <Skill Name="FIREBASE" Skill='85%' Color="#FFA611"/>
    </div>
    </>
  )
}

export default Skills