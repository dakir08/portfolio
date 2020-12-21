import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints/breakpoints";
import { color } from "../../theme/colors/color";

export const StyledCarousel = styled.div`
  width: 80vw;
  height: 70vh;
  background-color: white;
  position: relative;
  color: white;

  @media screen and (max-width: 1500px) {
    height: 50vh;
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    height: 45vh;
  }

  @media screen and (max-width: ${breakpoints.laptop}) {
    height: 35vh;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 25vh;
  }
`;

export const StyledCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  user-select: none;
`;

const StyleCarouselIconWrapper = css`
  position: absolute;
  color: inherit;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transition: 0.3s all ease;
  :hover {
    color: ${color.main.primary};
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 2rem;
    height: 2rem;
  }
`;

export const StyledCarouselLeftIcon = styled.div`
  ${StyleCarouselIconWrapper};
  left: 1%;
`;

export const StyledCarouselRightIcon = styled.div`
  ${StyleCarouselIconWrapper};
  right: 1%;
`;

export const StyledCarouselInstruction = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: -2rem;

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const StyledCarouselInstructionText = styled.span`
  margin-right: 2rem;
  user-select: none;
  :nth-last-of-type(1) {
    margin: 0;
  }
`;

export const StyledCarouselIndicators = styled.ol`
  position: absolute;
  width: 100%;
  bottom: 0.3rem;
  display: flex;
  justify-content: center;
`;

export const StyledCarouselIndicator = styled.li`
  width: 1.8rem;
  height: 0.2rem;
  background-color: rgba(0, 0, 0, 0.3);
  list-style: none;
  margin: 0 0.25rem;
  cursor: pointer;
`;

export const StyleCarouselIndicatorActive = css`
  background-color: rgba(0, 0, 0, 0.6);
`;
