import styled from 'styled-components';


export const ContactContainer = styled.div`
  padding: 40px 0;
  background: #fff;
  height: 1000px;
  margin-top: -160px;
  -webkit-clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);

  @media screen and (max-width: 1100px) {
    height: 1200px;
  }

  @media screen and (max-width: 900px) {
    padding: 30px 0;
    margin-top: -150px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 0;
    margin-top: -180px;
  }

  @media screen and (max-width: 480px) {
    height: 1200px;
  }
`;


export const ContactWrapper = styled.div`
  margin-top: 0px;
  position: relative;
  min-height: 100vh;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1100px) {
    margin-top: 10px;
    padding: 50px 50px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 70px;
    padding: 50px 30px;
  }
`;

export const ContactHeading = styled.p`
  color: #262626;
  font-size: 30px;
   margin-top: 100px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;
  

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;


export const ContactFormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  width: 50%;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    
    margin-bottom: 50px;
  }
`;

export const Info = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
 
`;

export const InfoContent = styled.div`
  display: flex;
  margin-left: 20px;
  width: 250px;
  flex-direction: column;
`;

export const InfoText1 = styled.p`
  display: flex;
  color: #98bff5;
  font-size: 16px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const InfoText2 = styled.p`
  display: flex;
  color: #262626;
  font-size: 16px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 400;
  margin-top: -10px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContactForm = styled.div`
  width: 40%;
  padding: 40px;
  background: #262626;
  border-radius: 25px;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const FormText = styled.p`
  margin-top: -10px;
  margin-bottom: 25px;
  color: #fff;
  font-size: 22px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const InputBox = styled.div`
 position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const Span = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 10px;
  font-size: 15px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 400;
  color: #fff;
  margin: 13px 0;
  pointer-event: none;
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;


export const FormInput = styled.input`
  width: 100%;
  background: #262626;
  padding: 5px 10px;
  margin: 15px 0;
  border: none;
  border-bottom: 2px solid #fff;
  outline: none;
  resize: none;

  color: #fff;
  font-size: 18px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  &:focus ~ ${Span} {
    color: #fff;
    font-size: 13px;
    transform: translateY(-30px);
    font-weight: 500;
  }

  &:valid ~ ${Span} {
    color: #fff;
    font-size: 13px;
    transform: translateY(-30px);
    font-weight: 500;
  }
`;




export const FormTextArea = styled.textarea`
  background: #262626;
  width: 100%;
  padding: 5px 10px;
  margin: 15px 0;
  border: none;
  border-bottom: 2px solid #fff;
  outline: none;
  resize: none;

  color: #fff;
  font-size: 18px;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  &:focus ~ ${Span} {
    color: #fff;
    font-size: 13px;
    transform: translateY(-30px);
    font-weight: 500;
  }
`;

export const SubmitInput = styled.input`
  width: 100px;
  background: #fff;
  color: #262626;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  padding: 10px;
  font-size: 18px;
`;