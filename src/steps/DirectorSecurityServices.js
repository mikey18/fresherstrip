import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import { Helmet } from 'react-helmet';

const DirectorSecurityServices = () => {
    return (  
        <div className = 'security-services'>
            <Helmet>
                <title>Director Security Services | Fresherstrip</title>
            </Helmet>
            <p id = "steps-info-header">Director Security Services</p>

            <div className = 'steps-info'>
                <ul>
                    <li>After your signature from Director, Student Support Services, head over to the Director, Security Services in the map below.</li><br />
                    <li><strong>Click View larger map in the map below then it 
                        will redirect you to either Google maps application or website and 
                        click on directions to direct you from where you are. </strong></li><br />
                    <li>Make sure your device <strong>Location</strong> is turned on.</li><br/>
                </ul>

                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.999714622194!2d3.7199044153914076!3d6.8906360206964665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd9bb2e5cbad1%3A0xb92fe3b74c9e0a95!2sAmphitheater%2C%20Babcock%20University!5e0!3m2!1sen!2sng!4v1606576941690!5m2!1sen!2sng" width="80%" height="460" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
            </div>

            <div className = "next-previous-button">           
                <Link to = '/DirectorStudentSupportServices'><button className = 'previous-button'>Previous</button></Link>
                <Link to = '/DataandArchievesOfficer'><button className = 'next-button'>Next</button></Link>
            </div>
        </div>
    );
}
 
export default DirectorSecurityServices;