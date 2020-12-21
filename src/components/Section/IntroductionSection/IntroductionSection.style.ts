import styled from "@emotion/styled";
import { breakpoints } from "../../../theme/breakpoints/breakpoints";
import { color } from "../../../theme/colors/color";
import { font } from "../../../theme/fonts/font";

export const StyledIntroductionSection = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${font.primary};
  font-weight: 400;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledIntroductionSectionTitle = styled.h1`
  font-family: inherit;
  font-weight: inherit;
  font-size: 3.5rem;
  margin: 0;
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const StyledIntroductionSectionDescription = styled.h2`
  font-family: inherit;
  font-weight: inherit;
  font-size: 2.2rem;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const StyledIntroductionSectionName = styled.span`
  color: ${color.main.primary};
`;

export const StyledIntroductionSectionDescriptionHighLight = styled.span`
  color: ${color.error.primary};
`;
