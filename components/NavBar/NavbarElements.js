import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
  background: #98bff5;
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
   
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 78px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1300px;
`

export const NavLogo = styled.img`
  cursor: pointer;
  width: 42px;
  height: 42px;
  padding: 1.5px;
  margin: auto 1px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: -1px;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -25px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`

export const NavItem = styled.li`
  height: 72px;
`

export const NavLink = styled(LinkScroll)`
  color: #fff;
  font-family: 'Encode Sans Expanded', sans-serif;

  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.25rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: black;
  }

  &.active {
    border-bottom: 3px solid #fcba57;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
      display: none;
  }
`
export const NavBtnLink = styled(LinkScroll)`

  border-radius: 45px;
  background: #262626;
  color: #fff;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 14px;
  font-family: 'Encode Sans Expanded', sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: black;
  }
`;