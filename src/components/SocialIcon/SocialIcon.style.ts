import styled from "@emotion/styled";

export const StyledSocial = styled.a`
  color: inherit;
  width: 3rem;
  height: 3rem;
  margin: 0 1rem;
  :hover {
    color: currentColor;
    ::before {
      transform: scaleX(0);
      transform-origin: left center;
    }

    ::after {
      transform: scaleX(0);
      transform-origin: right center;
    }
  }

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform-origin: right center;
    transition: transform 0.5s ease 0s;
  }

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform-origin: left center;
    transition: transform 0.5s ease 0s;
  }
`;

export const StyledSocialWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  :hover {
    ::before {
      transform: scale(1);
      transform-origin: center top;
    }
    ::after {
      transform: scale(1);
      transform-origin: center bottom;
    }
  }

  ::before {
    content: "";
    display: flex;
    width: 1px;
    height: 50px;
    background: currentColor;
    transform: scale(0);
    transform-origin: center bottom;
    transition: transform 0.5s ease 0s;
  }

  ::after {
    content: "";
    display: flex;
    width: 1px;
    height: 50px;
    background: currentColor;
    transform: scale(0);
    transform-origin: center top;
    transition: transform 0.5s ease 0s;
  }
`;

export const StyledSocialIcon = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
