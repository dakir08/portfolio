import { css } from "@emotion/react";
import React from "react";
import { HighLightText } from "../../HighLight/HighLightText";
import { Subtitle } from "../../Subtitle/Subtitle";
import { Title } from "../../Title/Title";
import {
  StyledSkillSection,
  StyledSkillSectionBody,
  StyledSkillSectionBodyChildrenHolder,
  StyledSkillSectionBodyDescriptionWrapper,
  StyledSkillSectionBodyImage,
  StyledSkillSectionDescription,
} from "./SkillSection.style";
import Fade from "react-reveal/Fade";

export interface SkillSectionProps {}

export const SkillSection: React.FunctionComponent<SkillSectionProps> = () => {
  const [treePath, setTreePath] = React.useState(0);

  const renderSkill = (params: {
    path: number;
    title: string;
    content: JSX.Element;
  }) => {
    const { content, path, title } = params;
    return (
      <StyledSkillSectionBodyDescriptionWrapper
        onMouseEnter={() => setTreePath(path)}
        onMouseLeave={() => setTreePath(0)}
      >
        <Fade top>
          <Subtitle
            title={title}
            css={css`
              margin-bottom: 1.5rem;
            `}
          />
        </Fade>
        <Fade left>
          <StyledSkillSectionDescription>
            {content}
          </StyledSkillSectionDescription>
        </Fade>
      </StyledSkillSectionBodyDescriptionWrapper>
    );
  };

  const getImage = () => {
    switch (treePath) {
      case 1:
        return "https://i.imgur.com/ap0X8Mh.png";
      case 2:
        return "https://i.imgur.com/aTQK2KR.png";
      case 3:
        return "https://i.imgur.com/xUKLFY0.png";

      default:
        return "https://i.imgur.com/ZKO6fQc.png";
    }
  };

  return (
    <StyledSkillSection id="skill">
      <Title title="Skills" />
      <StyledSkillSectionBody>
        <StyledSkillSectionBodyChildrenHolder
          css={css`
            text-align: center;
          `}
        >
          <Subtitle
            title="<SkillTree />"
            css={css`
              margin-bottom: 1.5rem;
            `}
          />
          <StyledSkillSectionBodyImage src={getImage()} alt="skill tree" />
        </StyledSkillSectionBodyChildrenHolder>
        <StyledSkillSectionBodyChildrenHolder>
          {renderSkill({
            path: 1,
            title: "<Core />",
            content: (
              <>
                I'm a software developer who focusing on Front-End Development.
                I keep up with all the latest features of{" "}
                <HighLightText>React</HighLightText>,{" "}
                <HighLightText>Javascript</HighLightText>,{" "}
                <HighLightText>Typescript</HighLightText>,{" "}
                <HighLightText>CSS</HighLightText>,{" "}
                <HighLightText>HTML</HighLightText>,{" "}
                <HighLightText>Redux</HighLightText> and{" "}
                <HighLightText>Mobx</HighLightText>. This includes, and is not
                limited to, React Hooks/Router, ES6, HTML5, CSS3, and complex
                state management.
              </>
            ),
          })}
          {renderSkill({
            path: 2,
            title: "<Development />",
            content: (
              <>
                For the development process, I set up my dev environment with
                <HighLightText>Node.js</HighLightText>, initialize projects with
                <HighLightText>Webpack</HighLightText> and handle my workflow
                and source control with <HighLightText>Git</HighLightText> and
                Git Bash. I am capable of rendering both client-side and
                server-side apps using the{" "}
                <HighLightText>Next.js</HighLightText> framework.
              </>
            ),
          })}
          {renderSkill({
            path: 3,
            title: "<Design />",
            content: (
              <>
                I am a fan of creature, I had been worked with{" "}
                <HighLightText>CSS, SASS Modules</HighLightText>, and some
                famous frameworks such as{" "}
                <HighLightText>Material UI</HighLightText> and{" "}
                <HighLightText>Bootstrap</HighLightText> as well. But I am a fan
                of <HighLightText>Styled Components</HighLightText>, I would
                immediately choose it for my personal project :D.
              </>
            ),
          })}
        </StyledSkillSectionBodyChildrenHolder>
      </StyledSkillSectionBody>
    </StyledSkillSection>
  );
};
