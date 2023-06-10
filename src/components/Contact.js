import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showValidation, setShowValidation] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setShowValidation(true);
            return;
        }

        // Check if the email is valid
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        // Reset form and show success message
        setName('');
        setEmail('');
        setMessage('');
        setShowValidation(false);
        setEmailError('');
        alert('Form submitted successfully!');
    };

    return (
        <Container>
            <Container className="text-center">
                <h1>Contact Page</h1>
            </Container>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label style={{ fontSize: '1.3rem' }}>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ fontSize: '1.2rem' }} // Adjust the font size here
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label style={{ fontSize: '1.3rem' }}>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ fontSize: '1.2rem' }} // Adjust the font size here
                    />
                    {emailError && <Alert variant="danger">{emailError}</Alert>}
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label style={{ fontSize: '1.3rem' }}>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{ fontSize: '1.2rem' }} // Adjust the font size here
                    />
                </Form.Group>
                {showValidation && (
                    <Alert variant="danger">Please fill in all required fields.</Alert>
                )}
                <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" type="submit" style={{ fontSize: '1.2rem', padding: '0.5rem 2rem' }}>
                        Submit
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Contact;
