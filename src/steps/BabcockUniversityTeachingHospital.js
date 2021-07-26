import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import { Helmet } from 'react-helmet';

const BabcockUniversityTeachingHospital = () => {
    return ( 
        <div className = 'teaching-hospital'>
            <Helmet>
                <title>Babcock University Teaching Hospital | Fresherstrip</title>
            </Helmet>
            <p id = "steps-info-header">Babcock University Teaching Hospital</p>

            <div className = 'steps-info'>
                <ul>
                    <li>For your medicals, it is in phases, a directional 
                        slip will be handed to you, that will guide you 
                        through the whole process in a day time, your medicals 
                        result should be out and make <strong>three</strong> photocopies 
                        of that. The location is in the map below.</li><br />
                        <li><strong>Click View larger map in the map below then it 
                        will redirect you to either Google maps application or website and 
                        click on directions to direct you from where you are. </strong></li><br />
                    <li>Make sure your device <strong>Location</strong> is turned on.</li><br/>
                </ul>

                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.995789551367!2d3.7151118153913982!3d6.891105820690855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd83c1bf72d73%3A0xe3109a2a97b2453!2sBabcock%20University%20Teaching%20Hospital!5e0!3m2!1sen!2sng!4v1606576700924!5m2!1sen!2sng" width="80%" height="460" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>

            </div>

            <div className = "next-previous-button">           
                <Link to = '/HeadOfDepartment'><button className = 'previous-button'>Previous</button></Link>
                <Link to = '/DirectorStudentSupportServices'><button className = 'next-button'>Next</button></Link>
            </div>
        </div>
    );
}
 
export default BabcockUniversityTeachingHospital;