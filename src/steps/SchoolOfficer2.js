import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import { Helmet } from 'react-helmet';

const SchoolOfficer2 = () => {
    return (  
        <div className = 'school-officer2'>
            <Helmet>
                <title>School Officer | Fresherstrip</title>
            </Helmet>
            <p id = "steps-info-header">School Officer</p>

            <div className = 'steps-info'>
                <ul>
                    <li>After your signature from Admissions Officer, head over to the School Officer in the map below. 
                        Make <strong>three</strong> photocopies each of the forms given to you by your department School Officer.
                    </li><br />
                    <li><p><strong>Note</strong> that the signing process is to be done accordingly.</p></li>
                    <li><p> <strong>Click View larger map in the map below then it 
                        will redirect you to either Google maps application or website and 
                        click on directions to direct you from where you are. </strong></p></li><br />
                    <li><p>Make sure your device <strong>Location</strong> is turned on.</p></li><br/>
                </ul>
                
                <h3 id = 'map-label'>School of Computing and Engineering Sciences</h3>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.769113918432!2d3.7236643942485266!3d6.8936739514567735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6859156567666a0!2sNew%20Horizon%20Computer%20Science%20%26%20Engineering%20Complex!5e0!3m2!1sen!2sng!4v1605564968782!5m2!1sen!2sng" width="80%" height="460" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe><br />
               
                <h3 id = 'map-label'>Mass Communication</h3>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1665.4011334523088!2d3.721820573000085!3d6.888955300725345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd83e24739a33%3A0x5c1ad29cc0b7b2b0!2sBabcock%20University%20Science%20Complex!5e0!3m2!1sen!2sng!4v1607976433532!5m2!1sen!2sng" width="80%" height="460" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
            </div>

            <div className = "next-previous-button">           
                <Link to = '/AdmissionsOfficer'><button className = 'previous-button'>Previous</button></Link>
                <a href = 'https://umis.babcock.edu.ng/babcock/'><button className = 'next-button'>Next</button></a>
            </div>
        </div>
    );
}
 
export default SchoolOfficer2;