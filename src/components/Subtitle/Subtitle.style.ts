import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints/breakpoints";
import { color } from "../../theme/colors/color";

export const StyledSubtitle = styled.h2`
  font-size: 2rem;
  letter-spacing: 1.1px;
  font-style: italic;
  color: ${color.text.primary};
  font-weight: 700;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;
