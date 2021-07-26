// import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './scrolltotop/scrollToTop';
import { Helmet } from 'react-helmet';

const Home = () => {

    return ( 
        <div className = "home">
            <Helmet>
                <title>Home | Fresherstrip</title>
            </Helmet>
           <div className = "black-look">
                <div className = "intro">
                    <p>Welcome to Fresherstrip,</p>
                    <p id = "say">We offer Babcock University 100 level School of Computing and Engineering Sciences and Mass Comm the steps and location to make your signing process faster.<br/><br/>
                    Down here are the eight(8) steps you need to take, click on them to get the directions.</p>                
                </div>
            </div>
            <p id = "step-header">Steps</p>
            <div className = "step-preview">
                <Link to = '/Requirements'><p>Requirements</p></Link>
                <Link to = '/SchoolOfficer'><p>1. School Officer</p></Link>
                <Link to = '/HeadOfDepartment'><p>2. Head of Department</p></Link>
                <Link to = '/BabcockUniversityTeachingHospital'><p>3. Babcock University Teaching Hospital</p></Link>
                <Link to = '/DirectorStudentSupportServices'><p>4. Director, Student Support Services</p></Link>
                <Link to = '/DirectorSecurityServices'><p>5. Director, Security Services</p></Link>
                <Link to = '/DataandArchievesOfficer'><p>6. Data and Archieves Officer</p></Link>
                <Link to = '/AdmissionsOfficer'><p>7. Admissions Officer</p></Link>
                <Link to = '/SchoolOfficer2'><p>8. School Officer</p></Link>
                <a href = 'https://umis.babcock.edu.ng/babcock/'><p>Online Registration</p></a>

            </div>
            
            <ScrollToTop></ScrollToTop>
        </div>

    );
}
 
export default Home;