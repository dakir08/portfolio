import styled from "@emotion/styled";
import { color } from "../../theme/colors/color";

export const StyledTitle = styled.h3`
  color: ${color.text.primary};
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  font-size: 2.5rem;

  ::after {
    content: "";
    display: block;
    margin: 0px auto;
    width: 45%;
    padding-top: 0.35rem;
    border-bottom: 3px solid ${color.text.primary};
  }
`;
