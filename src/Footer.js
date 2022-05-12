import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
             <div className="footer">
                <a href="https://twitter.com/PadgySoltis" target="_blank" rel="noreferrer noopener"
                className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://github.com/psoltis7" target="_blank" rel="noreferrer noopener"
                className="github">
                <FontAwesomeIcon icon={faGithub} size="2x" /> 
                </a>
                <a href="https://www.linkedin.com/in/padgy-soltis" target="_blank" rel="noreferrer noopener"
                className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </footer>
    );
}
 
export default Footer;