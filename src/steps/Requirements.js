import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Requirements = () => {
    return ( 
        <div className = 'requirements'>
            <Helmet>
                <title>Requirements | Fresherstrip</title>
            </Helmet>

            <p>Requirements</p>
            <div className = 'requirements-list'>
                <li>Admission letter (six photocopies)</li><br/>
                <li>Birth certificate</li><br/>
                <li>Jamb change of course/institution (six photocopies)</li><br/>
                <li>Jamb result slip  (six photocopies)</li><br/>
                <li>Student receipt (six photocopies)</li><br/>
                <li>WAEC result (six photocopies)</li><br/>
                <li>Minimum of eight (8) passport photographs</li><br/>        
            </div>
            <div className = "next-previous-button">           
                <Link to = '/SchoolOfficer'><button className = 'next-button'>Next</button></Link>
            </div>
        </div>
        
    );
}
 
export default Requirements;