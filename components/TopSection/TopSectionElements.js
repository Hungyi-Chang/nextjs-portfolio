import styled, {keyframes,css} from 'styled-components';

export const TopSectionContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 730px;
  position: relative;
  z-index: 1;
`;

export const TopBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const TopContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopName = styled.p`
  color: #262626;
  text-align: center;
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ImageContainer = styled.div`
  padding: 13px;
  width: 95px;
  height: 95px;
  @media screen and (max-width: 768px) {
    width: 85px;
    height: 85px;
  }

  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -30px;
`;

export const TopRole = styled.p`
  color: #262626;
  text-align: center;
  ${'' /* width: 28rem; */}
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border-right: 2.5px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-35%);

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    ${(props) => {
      return css`
        animation: ${typewriter} 4s steps(25) 1s infinite normal both,
          ${blinkTextCursor} 500ms steps(40) infinite normal;
      `;
    }}
  }
  ${(props) => {
    return css`
      animation: ${typewriter_desktop} 4s steps(25) 1s infinite normal both,
        ${blinkTextCursor} 500ms steps(40) infinite normal;
    `;
  }}
`;

const typewriter = keyframes`

from{
  width: 0;
}
to {
  width: 340px;
}

`;

const typewriter_desktop = keyframes`

from{
  width: 0;
}
to {
  width: 450px;
}

`;

const blinkTextCursor = keyframes`
  from{
  border-right-color: 2.5px solid rgba(255, 255, 255, 0.75);
}
to {
    border-right-color: transparent;
}

`;
