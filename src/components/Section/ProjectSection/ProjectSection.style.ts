import styled from "@emotion/styled";
import { breakpoints } from "../../../theme/breakpoints/breakpoints";

export const StyledProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledProjectSubtitle = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const StyledProjectHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.laptop}) {
    flex-direction: column;
    align-items: center;
  }
`;
