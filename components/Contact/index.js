import React from 'react';
import {
  ContactContainer,
  ContactWrapper,
  ContactHeading,
  ContactFormWrapper,
  ContactInfo,
  Info,
  Icon,
  InfoContent,
  InfoText1,
  InfoText2,
  ContactForm,
  FormText,
  InputBox,
  FormInput,
  FormTextArea,
  Span,
  SubmitInput,
} from './ContactElement';

const Contact = () => {
  return (
    <ContactContainer id={'contact'}>
      <ContactWrapper>
        <ContactHeading>Contact Me</ContactHeading>
        <ContactFormWrapper>
          <ContactInfo>
            <Info>
              <Icon src={'/image/linkedin.svg'} />
              <InfoContent>
                <InfoText1>Linkedin</InfoText1>
                <InfoText2>hung-yi-chang-844770150</InfoText2>
              </InfoContent>
            </Info>
            <Info>
              <Icon src={'/image/github.svg'} />
              <InfoContent>
                <InfoText1>Github</InfoText1>
                <InfoText2>https://github.com/Hungyi-Chang</InfoText2>
              </InfoContent>
            </Info>
            <Info>
              <Icon src={'/image/email.svg'} />
              <InfoContent>
                <InfoText1>Email</InfoText1>
                <InfoText2>mark.chang.private@gmail.com</InfoText2>
              </InfoContent>
            </Info>
          </ContactInfo>
          <ContactForm>
            <form>
              <FormText>Send Message</FormText>
              <InputBox>
                <FormInput type="text" required="required" />
                <Span>Full Name</Span>
              </InputBox>
              <InputBox>
                <FormInput type="text" required="required" ></FormInput>
                <Span>Email</Span>
              </InputBox>
              <InputBox>
                <FormTextArea type="text" required="required" />
                <Span>Type your message...</Span>
              </InputBox>
              <InputBox>
                <SubmitInput type="submit" value="Send" />
              
              </InputBox>
            </form>
          </ContactForm>
        </ContactFormWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
