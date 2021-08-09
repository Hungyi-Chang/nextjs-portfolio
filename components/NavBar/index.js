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
              <NavLink
                to="about"
                smooth={true}
                spy={true}
                exact="true"
                offset={-50}
              >
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="project"
                smooth={true}
                spy={true}
                exact="true"
                offset={-20}
              >
                Project
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                smooth={true}
                spy={true}
                exact="true"
                offset={140}
              >
                Contact Me
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="contact"
              smooth={true}
              spy={true}
              exact="true"
              offset={60}
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
