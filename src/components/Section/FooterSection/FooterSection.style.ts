import styled from "@emotion/styled";
import { breakpoints } from "../../../theme/breakpoints/breakpoints";
import { color } from "../../../theme/colors/color";
import { font } from "../../../theme/fonts/font";

export const StyledFooterSection = styled.div`
  background-color: ${color.background.primary};
  width: 100%;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 15%, 100% 0px, 100% 100%, 0px 100%, 0px 0px);
  font-family: ${font.primary};
`;

export const StyledFooterSectionTitle = styled.h3`
  text-transform: uppercase;
  font-size: 2.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }

  ::before {
    left: 0px;
    margin-left: 10%;
    position: absolute;
    content: "";
    width: 20vw;
    max-width: 25em;
    border-bottom: 5px solid currentColor;

    @media screen and (max-width: ${breakpoints.tablet}) {
      width: 15vw;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
      width: 10vw;
    }
  }

  ::after {
    right: 0px;
    margin-right: 10%;
    position: absolute;
    content: "";
    width: 20vw;
    max-width: 25em;
    border-bottom: 5px solid currentColor;

    @media screen and (max-width: ${breakpoints.tablet}) {
      width: 15vw;
    }

    @media screen and (max-width: ${breakpoints.mobile}) {
      width: 10vw;
    }
  }
`;

export const StyledFooterSectionSubtitle = styled.h4`
  letter-spacing: 0.125rem;
  font-weight: 500;
`;

export const StyledFooterSectionButton = styled.button`
  margin: 1rem 0;
  color: inherit;
  border: 1px solid currentColor;
  border-radius: 10px;
  outline: none;
  display: inline-flex;
  cursor: pointer;
  padding: 1rem 3rem;
  font-weight: 500;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s ease all;
  text-transform: uppercase;

  :hover {
    background-color: ${color.main.secondary};
  }

  :active {
    background-color: ${color.main.primary};
  }

  :focus {
    outline: none;
  }
`;

export const StyledFooterSectionGroupSocial = styled.div`
  display: flex;
  margin: 1.5rem;
`;

export const StyledFooterSectionCopyright = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.0825rem;
  color: ${color.text.secondary};
`;
