import styled from "@emotion/styled";
import { breakpoints } from "../../../theme/breakpoints/breakpoints";

export const StyledAboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

export const StyledAboutSectionCardHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const StyledAboutSectionSubtitleHolder = styled.div`
  margin: 3rem 0;
`;

export const StyledAboutSectionDescriptionHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
