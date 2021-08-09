import React, {useState} from 'react';
import { projects } from '../AboutSection/Data';
import {FadeIn, FadeInUp} from '../Animation/ViewportAnimation';
import {
  ProjectSectionContainer,
  ProjectSectionWrapper,
  ProjectHeading,
  ProjectWrapper,
  ProjectImageWrapper,
  ProjectImg,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
} from './ProjectSectionElement';


const ProjectSection = (props) => {
  const [showDescription, setShowDescription] = useState();

  
  return (
    <>
      <ProjectSectionContainer id={'project'}>
        <ProjectSectionWrapper>
          <ProjectHeading>PROJECTS</ProjectHeading>
          {props.projectsItem.map((project) => {
            return (
              <ProjectWrapper
                key={project.id}
                onMouseEnter={() => setShowDescription(project.id)}
                onMouseLeave={() => setShowDescription()}
              >
                <ProjectImageWrapper>
                  <ProjectImg src={project.imgProject} />
                </ProjectImageWrapper>
                <ProjectContent>
                  {showDescription === project.id ? (
                    <>
                      <FadeInUp>
                        <ProjectTitle>{project.title}</ProjectTitle>
                      </FadeInUp>
                      <FadeIn>
                        <ProjectDescription>
                          {project.description}
                        </ProjectDescription>
                      </FadeIn>
                    </>
                  ) : (
                    <FadeIn>
                      <ProjectTitle>{project.title}</ProjectTitle>
                    </FadeIn>
                  )}
                </ProjectContent>
              </ProjectWrapper>
            );
          })}
        </ProjectSectionWrapper>
      </ProjectSectionContainer>
    </>
  );
};

export default ProjectSection;
