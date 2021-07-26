import fresherstrip from '../image/fresherstrip.png'
import styled from 'styled-components'
import Burger from './Burger'
import { Link } from 'react-router-dom'
import RightNav from "./RightNav";


const Nav = styled.nav`
    border-radius: 30px;
    padding-bottom: 25px;
    padding-top: 25px;
    display: flex;
    align-items: center;
    max-width: 1350px;
    margin: 0 auto;
    border-bottom: 1px solid #000000;
    background-color: black;
    text-decoration: none;
    position: sticky;
    top: 0;
    
    .logo{
        margin-left: 50px;
    }
`;

const Navbar = () => {
    return ( 
        <Nav className = "navbar">
            <div className = 'logo'>
                <img src = {fresherstrip} width = "40" alt = "logo" /> 
            </div>
            <Link to = "/"><p>Fresherstrip</p></Link>
            <RightNav/>
            <Burger></Burger>
        </Nav>
    );
}
 
export default Navbar;