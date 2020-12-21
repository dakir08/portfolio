import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints/breakpoints";
import { color } from "../../theme/colors/color";

export const StyledDescriptionText = styled.span`
  color: ${color.text.secondary};
  font-size: 0.9rem;
  margin: 0 1rem;

  @media screen and (max-width: ${breakpoints.mobile}) {
    margin: 1rem;
  }
`;
