import { css } from "@emotion/react";
import React from "react";
import { Carousel } from "../Carousel/Carousel";
import Icon from "../Icon/Icon";
import { To30 } from "../Icon/Icons";
import { Portal } from "../Portal/Portal";
import {
  StyledProject,
  StyledProjectImage,
  StyledProjectTitle,
  StyledProjectBody,
  StyledProjectDescription,
  StyledProjectHeader,
  StyledProjectButton,
  StyledProjectDescriptionText,
  StyleProjectDescriptionDisplay,
} from "./Project.style";

export interface ProjectProps {
  name: string;
  description: JSX.Element;
  link: string;
  showcaseImages: string[];
}

export const Project: React.FunctionComponent<ProjectProps> = ({
  description,
  link,
  name,
  showcaseImages,
}) => {
  const [hover, setHover] = React.useState(false);
  const [openPortal, setOpenPortal] = React.useState(false);
  return (
    <StyledProject>
      <StyledProjectHeader
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <StyledProjectImage src={showcaseImages[0]} />
        <StyledProjectDescription css={hover && StyleProjectDescriptionDisplay}>
          <StyledProjectDescriptionText>
            {description}
          </StyledProjectDescriptionText>
          <StyledProjectButton onClick={() => setOpenPortal(true)}>
            see more
          </StyledProjectButton>
        </StyledProjectDescription>
      </StyledProjectHeader>
      <StyledProjectBody>
        <StyledProjectTitle>{name}</StyledProjectTitle>
        <a href={link} target="_blank">
          <Icon
            data={To30}
            css={css`
              cursor: pointer;
            `}
          />
        </a>
      </StyledProjectBody>

      {openPortal && (
        <Portal onClose={() => setOpenPortal(false)}>
          <Carousel
            onClose={() => setOpenPortal(false)}
            data={showcaseImages}
          />
        </Portal>
      )}
    </StyledProject>
  );
};
