import React from 'react';
import {
  TopSectionContainer,
  TopBg,
  TopName,
  TopContent,
  ImageContainer,
  NameContainer,
  TopRole
} from './TopSectionElements';
import AnimateBg from './../Animation/AnimateBg';
import Image from 'next/image';

const TopSection = () => {
  return (
    <TopSectionContainer>
      <TopBg>
        <AnimateBg />
      </TopBg>
      <TopContent>
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
        <TopRole>Software Developer</TopRole>
      </TopContent>
    </TopSectionContainer>
  );
};

export default TopSection;
