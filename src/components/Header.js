import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import HeaderDropDown from './HeaderDropDown';
import "../stylesheets/header.css";

const Header = () => {

    const [open, setOpen] = useState(false);

    function onHamburgerClicked() {
        setOpen((x) => !x);
    }

    return (
        <>
            <header className="header">
                <div className="logo-txt">PRACTICO</div>
                <div className='hide-items'>HOME</div>
                <div className='hide-items'>ABOUT</div>
                <div className='hide-items'>SERVICES</div>
                <div className='hide-items'>PRODUCTS</div>
                <div className='hide-items'>CONTACT</div>
                <div className='hide-items'>LOGIN</div>
                {open ? <AiOutlineCloseSquare className='hamburger-menu' onClick={onHamburgerClicked} /> :
                    <GiHamburgerMenu className='hamburger-menu' onClick={onHamburgerClicked} />}
            </header>
            {open ? <HeaderDropDown /> : null}
        </>
    )
}

export default Header
