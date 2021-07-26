import { Link } from 'react-router-dom';

const NotFound = () => {
    return (  
        <div className = "not-found">
            <h2>Sorry</h2><br />
            <p>That page cannot be found</p><br /><br /><br />
            <Link to = "/" id = 'not-found-link'>Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound;