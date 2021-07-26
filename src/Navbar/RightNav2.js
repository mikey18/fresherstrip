import { Link } from 'react-router-dom';
import styled from 'styled-components'

const UL = styled.ul`
        margin-left: auto;
        list-style: none;
        display: none; 

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
        display: flex;
        margin-right: 0;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'} ;
        transition: 0.15s;
        border-radius: 30px;
        flex-flow: column nowrap;
        background-color: #f1356d;
        top: 0;
        right: 0;
        height: 400px;
        padding-top: 3.5rem;
        padding-left: 0.1rem;
        li{
            color: white;
            padding-right: 50px;
            padding-top: 60px;
            padding-left: 10px;
            transition: all 0.1s linear;    
        }
        li:hover {
            color: black;
        }
    }
`;

const RightNav2 = ({ open }) => {
    
    return ( 
        <UL open = {open}>
           <Link to = '/'><li>Home</li></Link> 
           <Link to = './AboutUs'><li>About Us</li></Link> 
           <Link to = './ContactUs'><li>Contact Us</li></Link>
        </UL>
    );
}
 
export default RightNav2;