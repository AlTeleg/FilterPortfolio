import { v4 as uuidv4 } from 'uuid';

const ProjectList = ({ projects }) => {
      const redirectToImgUrl = (event) => {
        window.location.href = event.target.src;
      }
    return (<div className="proj-list">
      {projects.map(project => (
        <div key={uuidv4()} className="proj">
          <img src={project.img} onClick={redirectToImgUrl} alt={project.category} className="proj-img"/>
        </div>
      ))}
    </div>)
};
  
export default ProjectList;