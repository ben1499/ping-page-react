import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer>
            <div className="footer-icons">
                <span className="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                </span>
                <span className="icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span className="icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
            </div>
            <div>&copy; Copyright Ping. All rights reserved.</div>
        </footer>
    );
}

export default Footer;