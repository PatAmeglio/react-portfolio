const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px'
}

function Footer() {
    return (
        <div style={footerStyle} className="form-group cover-container d-flex w-50 h-100 p-3 mx-auto">
            <a href="https://github.com/ohNOitsRO/"><img src={'github.com'}
                id="contactImages"
                alt="Github Portfolio">
            </img></a>

            <a href="mailto:webdevrodel@gmail.com"><img src={'pameglio101@yahoo.com'}
                id="contactImages"
                alt="My Email">
            </img></a>

            <a href="https://www.linkedin.com/in/roland-delgado-794237271/"><img src={'Linkedin.com'}
                id="contactImages"
                alt="LinkedIn Profile">
            </img></a>
        </div>
    );
}

export default Footer;