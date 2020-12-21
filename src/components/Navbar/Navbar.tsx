import React from "react";
import Icon from "../Icon/Icon";
import {
  Contact32,
  Hamburger40,
  Home32,
  Person32,
  Project32,
  Skill32,
} from "../Icon/Icons";
import {
  StyledNavbar,
  StyledNavbarItem,
  StyledNavbarStickyTop,
} from "./Navbar.style";
import Fade from "react-reveal/Fade";
import { useWindowSize } from "../../hooks/useScreenSize";
import { css } from "@emotion/react";

const items = [
  {
    to: "#introduction",
    name: "Home",
    icon: Home32,
  },
  {
    to: "#about",
    name: "About",
    icon: Person32,
  },
  {
    to: "#skill",
    name: "Skill",
    icon: Skill32,
  },
  {
    to: "#project",
    name: "Project",
    icon: Project32,
  },
  {
    to: "#footer",
    name: "Contact",
    icon: Contact32,
  },
];

export interface NavbarProps {}

export const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [open, setOpen] = React.useState(false);
  const { windowSize } = useWindowSize();

  if (Number(windowSize.width) <= 768) return null;

  return (
    <>
      <StyledNavbarStickyTop onClick={() => setOpen(!open)}>
        <Icon data={Hamburger40} />
      </StyledNavbarStickyTop>
      <StyledNavbar
        css={
          open &&
          css`
            visibility: visible;
          `
        }
      >
        <Fade left when={open}>
          {items.map(({ name, to, icon }) => (
            <a href={to} key={to} onClick={() => setOpen(false)}>
              <StyledNavbarItem>
                <Icon
                  data={icon}
                  css={css`
                    margin-right: 1rem;
                  `}
                />
                {name}
              </StyledNavbarItem>
            </a>
          ))}
        </Fade>
      </StyledNavbar>
    </>
  );
};
