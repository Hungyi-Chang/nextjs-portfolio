import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarLink,
  ResumeLink,
  ContactLink,
  SidebarMenu,
} from './SideBarElements';
import Link from 'next/link';

function SideBar({ isOpen, toggle }) {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu >
            <SidebarLink to="about" smooth={true}
              spy={true}
              exact="true"
              offset={-50}
              onClick={toggle}>About Me</SidebarLink>
            <SidebarLink to="project" smooth={true}
              spy={true}
              exact="true"
              offset={100}
              onClick={toggle}>Project</SidebarLink>
            
          </SidebarMenu>
          <SideBtnWrap>
            <ContactLink to="contact" onClick={toggle}>Contact Me</ContactLink>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default SideBar;
