import React from 'react';

class Footer extends React.Component {
    render() {
        return <footer className="footer">
            <a href="p1.html"><img className="navbar-logo" src="images/web_logo.png" alt="Logo_web"></img></a>
            <div id="social-layout">
                <a href="https://www.uc3m.es/Inicio"><img className="social-media" src="images/logo_uc3m.png" alt="uc3m"></img></a>
                <a href="https://www.instagram.com/?hl=es"><img className="social-media" src="images/logo_instagram.png"
                    alt="instgram"></img></a>
                <a href="https://twitter.com/?lang=es"><img className="social-media" src="images/logo_twitter.png"
                    alt="twitter"></img></a>
            </div>
        </footer>
    }
}

export default Footer;
