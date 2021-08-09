import styled from 'styled-components';


export const ProjectSectionContainer = styled.div`
  background: #98bff5;
  height: 1600px;
  padding: 40px 0;

  @media screen and (max-width: 900px) {
    padding: 30px 0;
    margin-top: 150px;
    height: 1400px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 0;
    margin-top: 200px;
    height: 2000px;
  }

  @media screen and (max-width: 550px) {
    padding: 0;
    margin-top: -200px;
    height: 2000px;
  }

  ${'' /* @media screen and (max-width:480px) {
    height: 1600px;
  } */}
`;

export const ProjectSectionWrapper = styled.div`
  width: 100%;
  height: 1300px;
  display: grid;
  grid-template-rows: repeat(3, auto);
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  max-width: 1200px;
  padding: 0 60px;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    height: 1100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
    height: 1750px;
  }

  @media screen and (max-width: 550px) {
    height: 1800px;
  }
`;

export const ProjectHeading = styled.p`
  color: #fff;
  font-size: 30px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
  @media screen and (max-width: 550px) {
    margin-top: 200px;
  }
`;

export const ProjectWrapper = styled.div`
  background: #262626;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  width: 100%;
  height: 340px;
  border-radius: 60px;
  ${'' /* box-shadow: 6px 8px 10px grey; */}
  justify-items: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: ease-out 3s;

  @media screen and (max-width: 900px) {
    height: 280px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    height: 500px;
    width: 45%;
    gap: 0px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    height: 420px;
    width: 80%;
    gap: 0px;
    text-align: center;
  }
`;

export const ProjectImageWrapper = styled.div`
  width: 72%;
  height: 75%;
  @media screen and (max-width: 1100px) {
    width: 70%;
    height: 70%;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
    height: 70%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    width: 75%;
    height: 180px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 23px;
    width: 85%;
    height: 160px;
  }
`;

export const ProjectImg = styled.img`
  object-fit: fill;
  border-radius: 50px;
  width: 100%;
  height: 100%;
`;

export const ProjectContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 0 40px;
  justify-content: center;
  transition: transform 300ms;
  ${'' /* &:hover {
    transform: translate(0, -2em);
  } */}

  @media screen and (max-width: 768px) {
    margin-top: -20px;
    height: 300px;
  }
`;

export const ProjectTitle = styled.p`
  ${'' /* margin-top: -50px; */}
  font-size: 20px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;

  align-items: center;

  @media screen and (max-width: 1100px) {
    font-size: 19px;
  }

  @media screen and (max-width: 900px) {
    font-size: 17px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;

  @media screen and (max-width: 1100px) {
    font-size: 14px;
  }

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;