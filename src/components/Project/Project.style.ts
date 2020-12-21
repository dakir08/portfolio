import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints/breakpoints";
import { color } from "../../theme/colors/color";
import { DEFAULT_BORDER_RADIUS } from "../../theme/constants/global";
import { font } from "../../theme/fonts/font";

export const StyledProject = styled.div`
  width: 28rem;
  height: 16rem;
  background-color: ${color.background.secondary};
  margin: 1.5rem;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.2rem 0;

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 25rem;
    height: 14rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 16rem;
    height: 11rem;
  }
`;

export const StyledProjectHeader = styled.div`
  position: relative;
  border-radius: inherit;
  overflow: hidden;
`;

export const StyledProjectImage = styled.img`
  width: 100%;
  border-radius: inherit;
`;

export const StyledProjectTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
`;

export const StyledProjectBody = styled.div`
  padding: 0 1.3rem;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  font-family: ${font.primary};
`;

export const StyledProjectIconGroup = styled.div`
  width: 4.1rem;
  display: flex;
  justify-content: space-between;
`;

export const StyledProjectDescription = styled.div`
  background-color: ${color.background.primary};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s all ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-size: 0.9rem;
  text-align: center;
  flex-direction: column;
  transform: scale(1.2);
`;

export const StyleProjectDescriptionDisplay = css`
  opacity: 1;
  transform: scale(1);
  visibility: visible;
`;

export const StyledProjectDescriptionText = styled.span`
  margin-bottom: 1rem;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
  }
`;

export const StyledProjectButton = styled.button`
  border: 2px solid ${color.main.primary};
  outline: none;
  display: inline-flex;
  cursor: pointer;
  padding: 0.5rem 1.2rem;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s ease all;
  color: inherit;
  border-radius: 10px;
  text-transform: capitalize;
  font-size: 1rem;

  :hover {
    background-color: ${color.main.primary};
  }

  :active {
    background-color: ${color.main.secondary};
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    padding: 0.3rem 0.8rem;
    font-size: 0.9rem;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    padding: 0.125rem 0.8rem;
    font-size: 0.7rem;
  }
`;
