import styled from "@emotion/styled";
import { rgba } from "polished";
import { color } from "../../theme/colors/color";

export const StyledNavbarStickyTop = styled.span`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 6.25rem;
  height: 5rem;
  background-color: ${color.main.primary};
  border-bottom-right-radius: 100%;
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: ${color.text.secondary};
  transition: 0.3s color ease;

  :hover {
    color: ${color.text.primary};
  }
`;

export const StyledNavbar = styled.nav`
  position: fixed;
  z-index: 10;
  left: 2%;
  top: 60%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  transition: 0.3s all ease;
  visibility: hidden;
`;

export const StyledNavbarItem = styled.div`
  color: ${color.text.primary};
  margin: 0.25rem;
  cursor: pointer;
  width: 15rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;

  transition: 0.3s all ease;
  :hover {
    background-color: ${rgba(color.main.primary, 0.2)};
  }
`;
