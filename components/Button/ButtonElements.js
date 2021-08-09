import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 45px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({boxShadow}) =>
    boxShadow ? `inset 0 0 0 0 #fcba57` : `none`};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) => {
    const {padding, color, background, fontSize, border} = props;
    return `
          ${'' /* width: ${width};
          height: ${height}; */}
          color: ${color};
          background: ${background};
          padding: ${padding};
          font-size: ${fontSize};
          border: ${border};
          
  `;
  }};
`;

export const ButtonNormal = styled.button`
  border-radius: 45px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({boxShadow}) =>
    boxShadow ? `inset 0 0 0 0 #fcba57` : `none`};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    ${
      '' /* box-shadow: ${({boxShadow}) =>
      boxShadow ? `inset 220px 0 10px 0 #fcba57` : `none`};
    background: ${({boxShadow, background}) =>
      boxShadow ? `${background}` : `#fcba57`}; */
    }
  }

  ${(props) => {
    const {padding, color, background, fontSize, border} = props;
    return `
          ${'' /* width: ${width};
          height: ${height}; */}
          color: ${color};
          background: ${background};
          padding: ${padding};
          font-size: ${fontSize};
          border: ${border};
          
  `;
  }};
`;
