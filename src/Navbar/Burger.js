import styled from 'styled-components';
import { useState } from 'react';
import RightNav2 from './RightNav2';


const StyledBurger = styled.div`
    margin-left: auto;
    margin-right: 50px;
    width: 2rem;
    height: 2rem;
    /* postion; fixed; */
    top: 15px;
    right: 20px;
    display: flex;
    z-index: 20;
    display: none;
    cursor: pointer;


    @media (max-width: 700px){
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
    }
    
    div{
        width: 2rem;
        height: 0.1rem;
        background-color: ${({ open }) => open ? 'black' : '#f1f1f1' };
        border-radius: 50px;
        transform-origin: 1px;
        transition: all 0.15s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)' };
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
            opacity: ${({ open }) => open ? 0 : 1 };
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)' };
        }
    }
`


const Burger = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <>
        <StyledBurger open = {open} onClick = {() => setOpen(!open)}> 
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
        <RightNav2 open = {open}></RightNav2>
        </>
    );
}
 
export default Burger;