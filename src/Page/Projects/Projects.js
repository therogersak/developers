import React, {useState , useEffect} from 'react'
import './Projects.css';
import db from '../../Firebase/firebase';
import ProjectItem from './ProjectItem/ProjectItem';

function Projects() {

  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection('projects').onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc) => ({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])
  console.log(data);
  return (
    <>
    <div className="projects">
        {
          data.map((data) => (
            <ProjectItem id={data.id} img={data.data.img} link={data.data.link} title={data.data.title} skills={data.data.skills} />
          ))
        }
    </div>
    </>
  )
}

export default Projects