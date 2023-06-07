import projects from "../Data/project.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
    return (
        <div className="projectcard">
            {projects.map(project => {
                return (
                    <Container fluid>
                        <Row>
                            <Col>
                                <Card>
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
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </div >
    )
}

export default Projects;