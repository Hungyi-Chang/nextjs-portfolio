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
          <SidebarMenu>
            <SidebarLink to="about">About Me</SidebarLink>
            <SidebarLink to="project">Project</SidebarLink>
            <Link href="/resume">
              <ResumeLink>Resume</ResumeLink>
            </Link>
          </SidebarMenu>
          <SideBtnWrap>
              <ContactLink to="contact">Contact Me</ContactLink>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default SideBar;
