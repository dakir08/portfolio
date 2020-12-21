import styled from "@emotion/styled";
import { breakpoints } from "../../../theme/breakpoints/breakpoints";
import { color } from "../../../theme/colors/color";
import { StyledDescriptionText } from "../../DescriptionText/DescriptionText.style";

export const StyledSkillSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

export const StyledSkillSectionBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSkillSectionBodyChildrenHolder = styled.div`
  width: 45%;

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;
export const StyledSkillSectionBodyImage = styled.img`
  height: 30rem;

  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 25rem;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    height: 20rem;
  }
`;

export const StyledSkillSectionBodyDescriptionWrapper = styled.div`
  margin: 2rem 1rem;
  cursor: default;
  line-height: 1.25;
  transition: 0.3s all ease;

  :hover {
    transform: scale(1.2);
  }
`;

export const StyledSkillSectionDescription = styled(StyledDescriptionText)`
  margin: 0;
  color: ${color.text.primary};
`;
