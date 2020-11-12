import styled, {keyframes,css} from 'styled-components';

export const WaveContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #98bff5;
`;

export const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(image/wave.png);
  background-size: 1000px 100px;
  ${(props) => {
    const {animation,interval, zIndex, opacity, delay, bottom} = props;
    if (animation === '1') {
      return css`
      animation: ${animate1} ${interval} linear infinite;
      z-index: ${zIndex};
      opacity: ${opacity};
      animation-delay: ${delay};
      bottom: ${bottom};  
      `;
    }else if(animation === '2') {
        return css`
          animation: ${animate2} ${interval} linear infinite;
          z-index: ${zIndex};
          opacity: ${opacity};
          animation-delay: ${delay};
          bottom: ${bottom};
        `;
    }
  }};
`;

const animate1 = keyframes`
  0%
  {
      background-position-x: 0;
  }
  100%
  {
      background-position-x: 1000px;
  }

`;

const animate2 = keyframes`
  0%
  {
      background-position-x: 0;
  }
  100%
  {
      background-position-x: -1000px;
  }

`;
