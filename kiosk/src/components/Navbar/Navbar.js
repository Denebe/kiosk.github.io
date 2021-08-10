import React, { useEffect, useState, useRef } from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements'
import { Button } from '../../globalStyle';

const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    };
};


const Navbar = () => {
    

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const [hide, setHide] = useState(false);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };



    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const throttleScroll = throttle(handleScroll, 50);

    useEffect(() => {
        documentRef.current.addEventListener('scroll', throttleScroll);
        return () => documentRef.current.removeEventListener('scroll', throttleScroll);
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#000000' }} >
                <Nav className={hide && 'hide'}>
                    <NavbarContainer>
                        <NavLogo className={hide && 'hide'} to="/" onClick={closeMobileMenu}>
                            <NavIcon />
                            VENDIT
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks className={hide && 'hide'} to="/kiosk">키오스크</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks className={hide && 'hide'} to="/program">객실관리프로그램</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks className={hide && 'hide'} to="/engine">부킹엔진</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks className={hide && 'hide'} to="/introduce">회사소개</NavLinks>
                            </NavItem>
                            
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>

            </IconContext.Provider>


        </>
    )
}

export default Navbar
