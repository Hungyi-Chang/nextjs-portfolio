import styled, {keyframes,css} from 'styled-components';

export const TopSectionContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 760px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 480px) {
    height: 780px;
  }
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
  margin-top: -10px;
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-top: -60px;
  }
`;

export const TopName = styled.p`
  color: #262626;
  text-align: center;
  font-size: 25px;
  font-family: 'Encode Sans Expanded', sans-serif;
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
  font-size: 35px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;
  border-right: 2.5px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-25%);

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


export const TopSummary = styled.p`
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 25px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 300;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;


export const TopButtonSection = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (max-width: 480px) {
    margin-top: 15px;
    flex-direction: column;
  }
`;

export const TopButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;

  @media screen and (max-width: 480px) {
    padding: 0.8rem 0;
  }
`;
export const IconContainer = styled.div`
  padding: 8px;
  margin-right: 1px;
  width: 45px;
  height: 45px;
  @media screen and (max-width: 768px) {
    width: 42px;
    height: 42px;
  }

  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
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
