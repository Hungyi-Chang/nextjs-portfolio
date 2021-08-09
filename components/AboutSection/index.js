import React, {useState} from 'react';
import {ButtonNormal as Button} from '../Button/ButtonElements';
import {FadeIn, FadeIn1,FadeIn2, FadeIn3} from '../Animation/ViewportAnimation';
import {
  AboutContainer,
  AboutHeading,
  AboutWrapper,
  ButtonContainer,
  IconContainer,
  ButtonWrapper,
  ContentRow,
  Column1,
  TextWrapper,
  InfoHeading,
  Column2,
  ImgWrap,
  InfoHeading2,
  InfoHeading3,
  InfoContext,
  ImgComponent,
  LogoWrapper,
  LogoContainer
} from './AboutElements';
import Image from 'next/image';

const AboutSection = (props) => {
  const [infoPage, setInfoPage] = useState();
  const [contentImg, setContentImg] = useState(props.imgAbout);

  const renderImage = (contentImg) => {
    return <ImgComponent src={contentImg} alt="" />;
  };
  const renderInfo = (infoCategory) => {
    switch (infoCategory) {
      case 'Intro':
        return (
          <>
           <FadeIn>
          <TextWrapper>
            
              <InfoHeading>{props.About}</InfoHeading>
          
          </TextWrapper>
          </FadeIn>
          </>
        );

      case 'Skills':
        return (
          <>
            <FadeIn1>
              <TextWrapper>
                <InfoHeading2>{props.Skill1}</InfoHeading2>
                <LogoWrapper>
                  <LogoContainer>
                    <Image
                      src="/image/javascript.svg"
                      alt="Picture of the information"
                      width={42}
                      height={42}
                    />
                  </LogoContainer>
                  <LogoContainer>
                    <Image
                      src="/image/java.svg"
                      alt="Picture of the information"
                      width={42}
                      height={42}
                    />
                  </LogoContainer>
                  <LogoContainer>
                    <Image
                      src="/image/c.svg"
                      alt="Picture of the information"
                      width={42}
                      height={42}
                    />
                  </LogoContainer>
                </LogoWrapper>
    
                <InfoHeading2>{props.Skill3}</InfoHeading2>
                <LogoWrapper>
                  <LogoContainer>
                    <Image
                      src="/image/netCore.png"
                      alt="Picture of the information"
                      width={42}
                      height={42}
                    />
                  </LogoContainer>
                  <LogoContainer>
                    <Image
                      src="/image/AWS.png"
                      alt="Picture of the information"
                      width={45}
                      height={42}
                    />
                  </LogoContainer>
                  <LogoContainer>
                    <Image
                      src="/image/react.svg"
                      alt="Picture of the information"
                      width={42}
                      height={42}
                    />
                  </LogoContainer>
                  <LogoContainer>
                    <Image
                      src="/image/html5.svg"
                      alt="Picture of the information"
                      width={42}
                      height={42}
                    />
                  </LogoContainer>
                  <LogoContainer>
                    <Image
                      src="/image/css.svg"
                      alt="Picture of the information"
                      width={42}
                      height={42}
                    />
                  </LogoContainer>
                </LogoWrapper>
              </TextWrapper>
            </FadeIn1>
          </>
        );

      case 'QA':
        return (
          <>
           <FadeIn2>
            <TextWrapper>
             
                <InfoHeading3>{props.Qa1}</InfoHeading3>
                <InfoContext>{props.An1}</InfoContext>
                <InfoHeading3>{props.Qa2}</InfoHeading3>
                <InfoContext>{props.An2}</InfoContext>
             
            </TextWrapper>
             </FadeIn2>
          </>
        );
      default:
        return (
          <>
            <FadeIn3>
              <TextWrapper>
                <InfoHeading>{props.About}</InfoHeading>
              </TextWrapper>
            </FadeIn3>
          </>
        );
    }
  };

  return (
    <>
      <AboutContainer id={props.id}>
        <AboutWrapper>
          <AboutHeading>ABOUT ME</AboutHeading>
          <ButtonContainer>
            <ButtonWrapper>
              <Button
                color={'#fff'}
                padding={'16px  42px'}
                background={'#262626'}
                fontSize={'16px'}
                border={'none'}
                onClick={() => {
                  setContentImg(props.imgAbout);
                  setInfoPage('Intro');
                }}
              >
                {/* <IconContainer>
                  <Image
                    src="/image/aboutIcon.svg"
                    alt="Picture of the information"
                    width={52}
                    height={52}
                  />
                </IconContainer> */}
                About
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                color={'#fff'}
                padding={'16px  42px'}
                background={'#262626'}
                fontSize={'16px'}
                border={'none'}
                onClick={() => {
                  setContentImg(props.imgSkills);
                  setInfoPage('Skills');
                  console.log(contentImg);
                }}
              >
                {/* <IconContainer>
                  <Image
                    src="/image/aboutIcon.svg"
                    alt="Picture of the information"
                    width={52}
                    height={52}
                  />
                </IconContainer> */}
                Skills
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                color={'#fff'}
                padding={'16px  42px'}
                background={'#262626'}
                fontSize={'16px'}
                border={'none'}
                gridColumn={'2/4'}
                onClick={() => {
                  setContentImg(props.imgQA);
                  setInfoPage('QA');
                }}
              >
                {/* <IconContainer>
                  <Image
                    src="/image/aboutIcon.svg"
                    alt="Picture of the information"
                    width={52}
                    height={52}
                  />
                </IconContainer> */}
                Q & A
              </Button>
            </ButtonWrapper>
          </ButtonContainer>

          <ContentRow>
            <Column1>{renderInfo(infoPage)}</Column1>
            <Column2>
              <ImgWrap>{renderImage(contentImg)}</ImgWrap>
            </Column2>
          </ContentRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
