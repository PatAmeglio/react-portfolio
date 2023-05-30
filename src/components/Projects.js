import projects from "../Data/project.json"

function Projects() {
    return (
        <div>
            {projects.map(project => {
                return (
                    <div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image} />
                        <a href={project.deployedLink}>Deployed Link</a>
                        <a href={project.github}>Github Link</a>
                    </div>
                )
            })}
        </div >
    )
}

export default Projects;