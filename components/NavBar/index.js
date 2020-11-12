import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Link from 'next/link';

const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href="/">
            <NavLogo
              src="image/android-chrome-192x192.png"
              alt="logo"
            ></NavLogo>
          </Link>
          <MobileIcon onClick={toggle}> 
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="project">Project</NavLink>
            </NavItem>
            <NavItem>
              <Link href="/Resume">
                <NavLink>Resume</NavLink>
              </Link>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Link href="/contact">
              <NavBtnLink>Contact Me</NavBtnLink>
            </Link>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
