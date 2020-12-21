import React from "react";
import { Github24, Linkedin24, Mail24, Steam24 } from "../../Icon/Icons";
import { SocialIcon } from "../../SocialIcon/SocialIcon";
import {
  StyledFooterSection,
  StyledFooterSectionButton,
  StyledFooterSectionCopyright,
  StyledFooterSectionGroupSocial,
  StyledFooterSectionSubtitle,
  StyledFooterSectionTitle,
} from "./FooterSection.style";

export interface FooterSectionProps {}

export const FooterSection: React.FunctionComponent<FooterSectionProps> = () => {
  const handleResumeButtonClicked = () => {
    window.open(
      "https://drive.google.com/drive/folders/1_zMe4FGnIONleDhvG2Zsep_dhyeumVwB?usp=sharing",
      "_blank"
    );
  };

  return (
    <StyledFooterSection id="footer">
      <StyledFooterSectionTitle>thank you</StyledFooterSectionTitle>
      <StyledFooterSectionSubtitle>
        Wanna get in touch?
      </StyledFooterSectionSubtitle>
      <StyledFooterSectionButton onClick={handleResumeButtonClicked}>
        My Resume
      </StyledFooterSectionButton>
      <StyledFooterSectionGroupSocial>
        <SocialIcon
          href="https://www.linkedin.com/in/maxphuongle/"
          iconData={Linkedin24}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/maxphuongle/"
          iconData={Github24}
        />
        <SocialIcon
          href="https://steamcommunity.com/id/SVNbreak"
          iconData={Steam24}
        />
        <SocialIcon href="mailto:max@maxphuongle.com" iconData={Mail24} />
      </StyledFooterSectionGroupSocial>
      <StyledFooterSectionCopyright>Max Le ©2020</StyledFooterSectionCopyright>
    </StyledFooterSection>
  );
};
