import React from "react";
import { HighLightText } from "../../HighLight/HighLightText";
import { Project } from "../../Project/Project";
import { Title } from "../../Title/Title";
import {
  StyledProjectHolder,
  StyledProjectSection,
  StyledProjectSubtitle,
} from "./ProjectSection.style";
import Fade from "react-reveal/Fade";

const projects: {
  name: string;
  description: JSX.Element;
  link: string;
  showcaseImages: string[];
}[] = [
  {
    name: "GetfromYT.com",
    description: (
      <>
        GetfromYT is an online services that support user download and cut
        video, audio from Youtube with{" "}
        <HighLightText strong>fastest speed</HighLightText>.
      </>
    ),
    link: "http://getfromyt.com/",
    showcaseImages: [
      "https://i.imgur.com/dXs2AyF.png",
      "https://i.imgur.com/kIggIPW.png",
      "https://i.imgur.com/MhrmhfG.png",
      "https://i.imgur.com/GK9IdSt.png",
    ],
  },
  {
    name: "Sprouts Market",
    description: (
      <>
        An online <HighLightText>E-commerce</HighLightText> store which selling
        grocery and delivery it to users.
      </>
    ),
    link: "https://delivery.sprouts.com/",
    showcaseImages: [
      "https://i.imgur.com/O45TRfy.png",
      "https://i.imgur.com/YVWeyad.png",
      "https://i.imgur.com/k08DgCS.png",
      "https://i.imgur.com/fB7T3B0.png",
    ],
  },
  {
    name: "Subway LAMP",
    description: (
      <>
        An online <HighLightText>E-commerce</HighLightText> subway website that
        selling subway item.
      </>
    ),
    link: "#",
    showcaseImages: [
      "https://i.imgur.com/9QHrJrC.png",
      "https://i.imgur.com/EDQZN25.png",
      "https://i.imgur.com/m15SOLi.png",
      "https://i.imgur.com/UwL4uYI.png",
    ],
  },
  {
    name: "Fantasy animated landing page",
    description: (
      <>
        An online <HighLightText>Landing Page</HighLightText> for a startup
        company in Poland. This project is written by pure{" "}
        <HighLightText>HTML</HighLightText> + <HighLightText>CSS</HighLightText>{" "}
        + <HighLightText>JS</HighLightText>.
      </>
    ),
    link: "https://www.websitestyle.pl",
    showcaseImages: [
      "https://i.imgur.com/Wdx16w6.png",
      "https://i.imgur.com/HhvPGxS.png",
      "https://i.imgur.com/h7b2n8M.png",
      "https://i.imgur.com/TKmsjIi.png",
      "https://i.imgur.com/ZX7o7pr.png",
    ],
  },
  {
    name: "Vidvid.io",
    description: (
      <>
        An online video/audio editor tool with the combine of many quick tools
        such as video cutter, video joiner, add subtitle. Written by{" "}
        <HighLightText>React</HighLightText> and{" "}
        <HighLightText>Web Assembly</HighLightText>.
      </>
    ),
    link: "#",
    showcaseImages: [
      "https://i.imgur.com/bvUzmaW.png",
      "https://i.imgur.com/WbiL8US.png",
      "https://i.imgur.com/bA4lwpZ.png",
    ],
  },
];

export interface ProjectSectionProps {}

export const ProjectSection: React.FunctionComponent<ProjectSectionProps> = () => {
  return (
    <StyledProjectSection id="project">
      <Fade top>
        <Title title="Projects" />
      </Fade>
      <Fade left>
        <StyledProjectSubtitle>
          Here are some of my recent <HighLightText>projects</HighLightText>.
          Hover a project card to view more{" "}
          <HighLightText>details</HighLightText>.
        </StyledProjectSubtitle>
      </Fade>
      <StyledProjectHolder>
        {projects.map(({ name, description, link, showcaseImages }) => (
          <Project
            name={name}
            description={description}
            link={link}
            showcaseImages={showcaseImages}
            key={name}
          />
        ))}
      </StyledProjectHolder>
    </StyledProjectSection>
  );
};
