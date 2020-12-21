import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints/breakpoints";
import { color } from "../../theme/colors/color";

const cardWidth = 12;
const cardHeight = 18;

export const StyledCard = styled.div`
  width: ${cardWidth}rem;
  height: ${cardHeight}rem;
  background-color: ${color.main.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 1rem;
`;

export const StyledCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -1px;
  width: calc(${cardWidth}rem + 1px);
  background: ${color.background.primary};
  clip-path: polygon(0px 0px, 100% 25%, 100% 100%, 0% 100%);
  padding: 1.25rem;
`;

export const StyledCardDescriptionTitle = styled.h3`
  margin: 1.7rem 0;
`;

export const StyledCardDescriptionSubtitle = styled.p`
  font-size: 0.9rem;
`;

export const StyledCardDescriptionIconWrapper = styled.div`
  margin-top: 2.5rem;
`;
