import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #fff;
  padding: 40px 0;
  height: 800px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }

  @media screen and (max-width: 550px) {
    height: 1200px;
  }
`;

export const AboutWrapper = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-rows: repeat(3, auto);
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
  padding: 0 24px;
  justify-items: center;
  align-items: center;
`;

export const AboutHeading = styled.p`
  color: #262626;
  font-size: 30px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 45px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 3.5rem;
  grid-gap: 60px;
  width: 600px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    grid-gap: 30px;
  }

  @media screen and (max-width: 520px) {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    grid-gap: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
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

export const ContentRow = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  padding-top: 100px;


  grid-template-areas: 'col2 col1';

  @media screen and (max-width: 900px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
    padding-top: 70px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col1;
`;


export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
 max-width: 555px;
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  display: grid;
  
  grid-template-rows: repeat(auto, auto);
  padding-bottom: 10px;
  ${'' /* text-align: center; */}
`;

export const InfoHeading = styled.div`
  color: #262626;
  line-height: 1.6;
  font-size: 24px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;

  padding: 0 25px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    padding: 0 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding: 0 10px;
  }
`;

export const InfoHeading2 = styled.p`
  color: #262626;
  font-size: 24px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const InfoHeading3 = styled.p`
  color: #262626;
  font-size: 24px;
  padding-left: 60px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;
  @media screen and (max-width: 900px) {
   padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const InfoContext = styled.p`
  color: #98bff5;
  font-size: 22px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 0px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImgComponent = styled.img`
  width: 100%;

  @media screen and (max-width: 1000px) {
    width: 500px;
    height: 350px;
  }

  @media screen and (max-width: 950px) {
    width: 450px;
    height: 300px;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  
  }
`;

export const LogoWrapper = styled.div`
  display: grid;
  padding: 0 80px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    padding: 0 30px;
  }
`;


export const LogoContainer = styled.div`
  padding: 8px;
  width: 50px;
  height: 50px;
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;