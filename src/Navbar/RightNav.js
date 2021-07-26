import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Ul = styled.ul`
        
    margin-left: auto;
    margin-right: 50px;
    flex-flow: row nowrap;
    display: flex;
    list-style: none;

    li{
        color: white;
        margin-left: 40px;
        padding: 10px;
        text-decoration: none;
        font-size: 16px;
        transition: all 0.1s linear;    
    }

    li:hover {
        color: #f1356d;
    }
    @media (max-width: 700px){
       display: none;
    }
`;

const RightNav = ({ open }) => {
    
    return ( 
        <Ul open = {open}>
           <Link to = '/'><li>Home</li></Link> 
           <Link to = './AboutUs'><li>About Us</li></Link> 
           <Link to = './ContactUs'><li>Contact Us</li></Link>
        </Ul>
    );
}
 
export default RightNav;