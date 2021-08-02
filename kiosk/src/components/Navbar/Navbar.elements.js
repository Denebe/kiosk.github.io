import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyle'

export const Nav = styled.nav`
background-color: #fff;
transition: background-color 1s linear 0s;
height: 80px;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
&.hide {
    background-color: #4b59f7;
};
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`

export const NavLogo = styled(Link)`

color: #000;
justify-self: right;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
&.hide {
    color: #fff;
}
`

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
&.hide {
    color: #fff;
}
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate()(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and ( max-width: 960px ) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 2s ease;
    background: #fff;
}
`

export const NavItem = styled.li`
color: #000000;
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #4b59f7;
}
`

export const NavLinks = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    &.hide {
    color: #fff;
}

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 1s ease;
        }
    }
`

export const NavItemBtn = styled.li`

@media screen and (max-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
}
`



