import emailpic from '../image/email-pic.png'
import phonepic from '../image/phone-pic.png'
import whatsapp from '../image/whatsapp.png'
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    return ( 
        <div className = "contact-us">
            <Helmet>
                <title>Contact Us | Fresherstrip</title>
            </Helmet>
            <p id = "steps-info-header">Contact Us</p>

            <div className = 'contact-us-info'>
                <div  className = 'email-phone'>
                    <img src = {emailpic} width = "60" alt = "logo" /> 
                </div>
                <p id = "contact-us-names">Email</p>
                <p>fresherstrip.com.ng@gmail.com</p>

                <div  className = 'email-phone'>
                    <img src = {phonepic} width = "60" alt = "logo" /> 
                </div>
                <p id = "contact-us-names">Phone</p>
                <p>+2348143146244</p>

                <div  className = 'email-phone'>
                    <img src = {whatsapp} width = "60" alt = "logo" /> 
                </div>
                <p id = "contact-us-names">Whatsapp</p>
                <p>+2348088174358</p>
            </div>
        </div>
    );
}
 
export default ContactUs;