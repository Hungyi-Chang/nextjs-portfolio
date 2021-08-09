import React from 'react';
import {FadeInUp, FadeIn} from '../Animation/ViewportAnimation';
import {
  TopSectionContainer,
  TopBg,
  TopName,
  TopContent,
  ImageContainer,
  NameContainer,
  TopRole,
  TopSummary,
  TopButtonSection,
  IconContainer,
  TopButtonWrapper,
} from './TopSectionElements';
import {Button} from '../Button/ButtonElements'
import AnimateBg from './../Animation/AnimateBg';
import Image from 'next/image';

const TopSection = () => {
  return (
    <TopSectionContainer>
      <TopBg>
        <AnimateBg />
      </TopBg>

      <TopContent>
        <FadeInUp>
          <NameContainer>
            <ImageContainer>
              <Image
                src="/image/personal_img.png"
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </ImageContainer>
            <TopName>MARK CHANG</TopName>
          </NameContainer>
        </FadeInUp>

        <TopRole>Software Developer</TopRole>
        <TopSummary>
          Software developer with commercial experience. Well versed in
          technology, writing code interface and developing systems
          user-friendly.
        </TopSummary>
        <TopButtonSection>
          <TopButtonWrapper>
            <Button
              
              color={'#262626'}
              padding={'14px 42px'}
              background={'#fff'}
              fontSize={'16px'}
              border={'none'}
              to="about"
              smooth={true}
              spy={true}
              exact="true"
              offset={-50}
            >
              {/* <IconContainer>
                <Image
                  src="/image/about.svg"
                  alt="Picture of the information"
                  width={62}
                  height={62}
                />
              </IconContainer> */}
              About Me
            </Button>
          </TopButtonWrapper>
          <TopButtonWrapper>
            <Button
              
              color={'#fff'}
              padding={'14px 42px'}
              background={'#262626'}
              fontSize={'16px'}
              border={'none'}
              to="project"
              smooth={true}
              spy={true}
              exact="true"
              offset={-50}
            >
              {/* <IconContainer>
                <Image
                  src="/image/project.svg"
                  alt="Picture of the project"
                  width={60}
                  height={60}
                />
              </IconContainer> */}
              See Works
            </Button>
          </TopButtonWrapper>
        </TopButtonSection>
      </TopContent>
    </TopSectionContainer>
  );
};

export default TopSection;
