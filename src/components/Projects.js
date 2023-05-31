import projects from "../Data/project.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
        <div>
            {projects.map(project => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Button href={project.deployedLink}>Deployed Link</Button>
                            <Button href={project.github}>Github Link</Button>
                        </Card.Body>
                    </Card>

                )
            })}
        </div >
    )
}

export default Projects;