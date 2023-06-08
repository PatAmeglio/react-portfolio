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
                    <Col md={4} key={project.id}>
                        <Card>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button href={project.deployedLink}>Deployed Link</Button>
                                <Button href={project.github}>Github Link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;
