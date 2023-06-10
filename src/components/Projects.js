import projects from "../Data/project.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
    return (
        <Container fluid>
            <Row className="justify-content-center">
                {projects.map(project => (
                    <Col sm={6} md={4} key={project.id} className="mb-4">
                        <Card style={{ backgroundColor: '#e0fbfc' }}>
                            <Card.Img variant="top" src={project.image} className="card-image" />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Title className="text-center mb-3" style={{ fontSize: '1.2rem' }}>
                                    {project.title}
                                </Card.Title>
                                <Card.Text className="text-center">{project.description}</Card.Text>
                                <div className="d-flex justify-content-center gap-2 mt-auto">
                                    <Button href={project.deployedLink}>Deployed Link</Button>
                                    <Button href={project.github}>Github Link</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;
