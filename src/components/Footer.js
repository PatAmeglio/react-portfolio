import React from 'react';
import { Container } from 'react-bootstrap';
import gitHubImage from '../images/github.png';
import emailImage from '../images/email.png';
import linkedInImage from '../images/linkedin.png';

function Footer() {
    return (
        <footer className="footer bg-transparent text-center py-4 mt-5">
            <Container>
                <a href="https://github.com/PatAmeglio/">
                    <img
                        src={gitHubImage}
                        id="contactImages"
                        alt="Github Portfolio"
                        className="contact-image mx-3 "
                        style={{ width: '4rem', height: '4rem' }} // Adjust the width and height to make the images smaller
                    />
                </a>

                <a href="mailto:pameglio101@yahoo.com">
                    <img
                        src={emailImage}
                        id="contactImages"
                        alt="My Email"
                        className="contact-image mx-3"
                        style={{ width: '4rem', height: '4rem' }} // Adjust the width and height to make the images smaller
                    />
                </a>

                <a href="https://www.linkedin.com/in/">
                    <img
                        src={linkedInImage}
                        id="contactImages"
                        alt="LinkedIn Profile"
                        className="contact-image mx-3"
                        style={{ width: '4rem', height: '4rem' }} // Adjust the width and height to make the images smaller
                    />
                </a>
            </Container>
        </footer>
    );
}

export default Footer;
