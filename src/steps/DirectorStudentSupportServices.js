import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import { Helmet } from 'react-helmet';

const DirectorStudentSupportServices = () => {
    return (  
        <div className = 'support-services'>
            <Helmet>
                <title>Director Student Support Services | Fresherstrip</title>
            </Helmet>
            <p id = "steps-info-header">Director Student Support Services</p>

            <div className = 'steps-info'>
                <ul>
                    <li>After your medicals, head over to the Director, Student Support Services in the map below.</li><br />
                    <li><strong>Click View larger map in the map below then it 
                        will redirect you to either Google maps application or website and 
                        click on directions to direct you from where you are. </strong></li><br />
                    <li>Make sure your device <strong>Location</strong> is turned on.</li><br/>
                </ul>

                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4710.472774843814!2d3.719752202637028!3d6.888246964499265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd83e6b0c565f%3A0x2fa8dcb8739701b5!2sBabcock%20university%20Registry!5e0!3m2!1sen!2sng!4v1606595308471!5m2!1sen!2sng" width="80%" height="460" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
            </div>

            <div className = "next-previous-button">           
                <Link to = '/BabcockUniversityTeachingHospital'><button className = 'previous-button'>Previous</button></Link>
                <Link to = '/DirectorSecurityServices'><button className = 'next-button'>Next</button></Link>
            </div>
        </div>

    );
}
 
export default DirectorStudentSupportServices;