import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileImage from '../images/profile.jpg';

function About() {
    return (
        <Container>
            <h1 className="text-center mb-4">About Me</h1>
            <Row >
                <Col xs={12} sm={8} md={6} lg={5} className="text-center mb-4">
                    <img src={profileImage} alt="profile" className="img-fluid" style={{ maxWidth: '120%', marginLeft: '-7rem' }} />
                </Col>
                <Col xs={12} sm={8} md={6} lg={7}>
                    <p style={{ fontSize: '1.7rem', marginBottom: '1.5rem' }}>
                        I am an Orlando-based web developer, specializing in full-stack web development. With a passion for creating exceptional websites, I combine my technical skills with a keen eye for design to deliver high-quality results.
                    </p>
                    <p style={{ fontSize: '1.7rem', marginBottom: '1.5rem' }}>
                        Prior to my career in web development, I have had diverse life experiences that have shaped my journey. From living in Dubai to pursuing my passion as a paragliding pilot and achieving a second-degree black belt, I bring a unique perspective and determination to my work.
                    </p>
                    <p style={{ fontSize: '1.7rem', marginBottom: '1.5rem' }}>
                        I take pride in my craftsmanship and attention to detail, which is reflected in the websites I build. As a graduate of the prestigious UCF Full Stack Web Development program, I have acquired a strong foundation in modern web technologies and best practices.
                    </p>
                    <p style={{ fontSize: '1.7rem' }}>
                        With every project, I strive for greatness, aiming to exceed expectations and create impactful online experiences. Let's collaborate to bring your dream website to life!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
