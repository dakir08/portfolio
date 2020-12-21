import React from "react";
import { Card } from "../../Card/Card";
import { DescriptionText } from "../../DescriptionText/DescriptionText";
import { HighLightText } from "../../HighLight/HighLightText";
import { Subtitle } from "../../Subtitle/Subtitle";
import { Title } from "../../Title/Title";
import {
  StyledAboutSection,
  StyledAboutSectionCardHolder,
  StyledAboutSectionDescriptionHolder,
  StyledAboutSectionSubtitleHolder,
} from "./AboutSection.style";
import Fade from "react-reveal/Fade";

const cards = [
  {
    title: "React",
    description: "UI/UX Design",
  },
  {
    title: "JS / TS",
    description: "Client / Server Scripts",
  },
  {
    title: "CSS3",
    description: "Styling / Animation",
  },
  {
    title: "HTML5",
    description: "Web Development",
  },
];

const descriptions = [
  <>
    I'm a Freelancer currently living in Melbourne, Asutralia. I have a serious
    passion for UI/UX design and creating modern UI which followed to the
    lastest trending in the world. I used <HighLightText>Figma</HighLightText>{" "}
    to design wireframe and make it with <HighLightText>HTML5</HighLightText>{" "}
    and <HighLightText>CSS3</HighLightText>
  </>,
  <>
    I have a strong knowledge with <HighLightText>ReactJS</HighLightText> and I
    have worked with this library when I studied university. With{" "}
    <HighLightText>Redux</HighLightText> or <HighLightText>Mobx</HighLightText>,
    I can manage the state well and make scalable app. I am a fan of{" "}
    <HighLightText>Styled Components</HighLightText>, it's really help me
    increase the ability to read the code.
  </>,
  <>
    My main goal is making a scalable app that can handle{" "}
    <HighLightText>1 MILLION USERS</HighLightText> daily and practicing is a key
    to this goal. MERN is my favorite stack and I love to work with{" "}
    <HighLightText>Typescript</HighLightText> since it provides types and it's
    easy for debugging large project.
  </>,
];

export interface AboutSectionProps {}

export const AboutSection: React.FunctionComponent = () => {
  return (
    <StyledAboutSection id="about">
      <Fade top>
        <Title title="about" />
        <StyledAboutSectionCardHolder>
          {cards.map(({ description, title }) => (
            <Card title={title} description={description} key={title} />
          ))}
        </StyledAboutSectionCardHolder>
      </Fade>
      <Fade left>
        <StyledAboutSectionSubtitleHolder>
          <Subtitle title="Driven, Self-Motivated, Problem Solver, Critical Thinker." />
        </StyledAboutSectionSubtitleHolder>
        <StyledAboutSectionDescriptionHolder>
          {descriptions.map((des, index) => (
            <DescriptionText key={index}>{des}</DescriptionText>
          ))}
        </StyledAboutSectionDescriptionHolder>
      </Fade>
    </StyledAboutSection>
  );
};
