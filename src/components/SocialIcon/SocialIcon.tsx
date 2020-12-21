import React from "react";
import Icon, { IconData } from "../Icon/Icon";
import {
  StyledSocial,
  StyledSocialIcon,
  StyledSocialWrapper,
} from "./SocialIcon.style";

export interface SocialIconProps {
  href: string;
  iconData: IconData;
}

export const SocialIcon: React.FunctionComponent<SocialIconProps> = ({
  href,
  iconData,
}) => {
  return (
    <StyledSocial href={href} target="_blank" rel="noreferrer">
      <StyledSocialWrapper>
        <StyledSocialIcon>
          <Icon data={iconData} />
        </StyledSocialIcon>
      </StyledSocialWrapper>
    </StyledSocial>
  );
};
