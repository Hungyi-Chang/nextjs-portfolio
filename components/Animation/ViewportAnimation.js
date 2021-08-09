import styled, {css} from 'styled-components';
import HOC from './ViewportHOC';

// define keyframes
const keyframes = {
  fadeInUp: () => css`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
      }

      to {
        opacity: 1;
        transform: none;
      }
    }
  `,
  fadeInLeft: () => css`
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
      }

      to {
        opacity: 1;
        transform: none;
      }
    }
  `,

  fadeIn: () => css`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `,
};

// define animation styles
const animated = () => css`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
`;

// define animations
const Animation = {
  fadeInUp: () => css`
    animation-name: fadeInUp;

    ${animated}
    ${keyframes.fadeInUp}
  `,
  fadeInLeft: () => css`
    animation-name: fadeInLeft;

    ${animated}
    ${keyframes.fadeInLeft}
  `,
  fadeIn: () => css`
    animation-name: fadeIn;

    ${animated}
    ${keyframes.fadeIn}
  `,
};

/**
 * include an animation when the div enter viewport using HOC and props
 *
 * NOTE: only play animation when screensize is larger than middle
 */

export const FadeInUp = HOC(styled.div`
  @media only screen and (min-width: 480px) {
    ${(props) => {
      const {enterViewport} = props;
      if (enterViewport) {
        return Animation.fadeInUp;
      }
      return 'opacity: 0';
    }}
  }
`);

export const FadeInLeft = HOC(styled.div`
  @media only screen and (min-width: 480px}) {
    ${(props) => {
      const {enterViewport} = props;
      if (enterViewport) {
        return Animation.fadeInLeft;
      }
      return 'opacity: 0';
    }}
  }
`);

export const FadeIn = HOC(styled.div`
  @media only screen and (min-width: 480px) {
    ${(props) => {
      const {enterViewport} = props;
      if (enterViewport) {
        return Animation.fadeIn;
      }
      return 'opacity: 0';
    }}
  }
`);

export const FadeIn1 = HOC(styled.div`
  @media only screen and (min-width: 480px) {
    ${(props) => {
      const {enterViewport} = props;
      if (enterViewport) {
        return Animation.fadeIn;
      }
      return 'opacity: 0';
    }}
  }
`);

export const FadeIn2 = HOC(styled.div`
  @media only screen and (min-width: 480px) {
    ${(props) => {
      const {enterViewport} = props;
      if (enterViewport) {
        return Animation.fadeIn;
      }
      return 'opacity: 0';
    }}
  }
`);
export const FadeIn3 = HOC(styled.div`
  @media only screen and (min-width: 480px) {
    ${(props) => {
      const {enterViewport} = props;
      if (enterViewport) {
        return Animation.fadeIn;
      }
      return 'opacity: 0';
    }}
  }
`);

export default null;
