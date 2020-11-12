import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: #3b87f2;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
  color: #fff
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
 margin: 0 auto;
`;

export const SidebarMenu = styled.div`
 width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 70px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fcba57;
    transition: 0.2s ease-in-out;
  }
`;

export const ResumeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #fcba57;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactLink = styled.div`
  border-radius: 50px;
  background: #98bff5;
  white-space: nowrap;
  padding: 16px 48px;
  color: #010606;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fcba57;
    color: #010606;
  }
`;