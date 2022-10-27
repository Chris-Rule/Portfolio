import "./Works.css";
import projects from "../projects";

console.log(projects.projects[0]);

const projectList = projects.projects;

const Works = () => {
  return (
    <section className="works">
      {projectList.map((project) => {
        return (
          <section className="project-panel" key={project.projectID}>
            <div className="project-body">
              <div className="text-container">
                <h1>{project.name}</h1>
                {project.description.map((paragraph) => {
                  return <p>{paragraph}</p>;
                })}
              </div>
              <div className="img-container">
                <img src={project.imgURL} alt={project.name + " image"} />
              </div>
            </div>
            <div className="link-container">
              <a
                href={project.projectURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Project
              </a>
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Works;
