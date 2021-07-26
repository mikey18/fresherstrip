import mike from '../image/mike.png'
import holumidey from '../image/holumidey.png'
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    return ( 
        <div className = 'about-us'>
            <Helmet>
                <title>About Us | Fresherstrip</title>
            </Helmet>
            <p id = "steps-info-header">AboutUs</p>

            <p>We offer Babcock University 100 level 
                School of Computing and Engineering Sciences and Mass 
                Comm the steps and location to make your signing process 
                easier and faster.
                </p>    
            <div className = 'aboutus-info'>            
                <img src = {mike} width = "250" alt = "logo" /> 
                <p id = "creator-credit-level">Creator:</p> 
                <p id = "michael-name">Michael Ibeh</p>
                <p id = "creator-credit-level">CS 300lvl</p>

                <img src = {holumidey} width = "250" alt = "logo" /> 
                <p id = "creator-credit-level">Credit:</p> 
                <p id = "holu-name">Holumidey Mercy Ajoke</p>
                <p id = "creator-credit-level">CS 300lvl</p>
            </div>
        </div>
    );
}
 
export default AboutUs;