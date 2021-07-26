import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <footer>
            <div class = "footer-copyright text-center py-3">
                <Link to = "/">&copy; 2021</Link>
            </div>
        </footer>
    );
}
 
export default Footer;