import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileImage from '../images/profile.jpg';

function About() {
    return (
        <Container className="text-center">
            <h1 className="mb-4">About Me</h1>
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6} lg={5}>
                    <img src={profileImage} alt="profile" className="img-fluid mb-4" />
                </Col>
            </Row>
            <p style={{ fontSize: '1.7rem' }}>
                Orlando based web developer in training. Living life to the fullest from living in Dubai, to being a paragliding pilot, to becoming a second degree black belt. Built my own computer to build your dream website. On the path to greatness!
            </p>
        </Container>
    );
}

export default About;
