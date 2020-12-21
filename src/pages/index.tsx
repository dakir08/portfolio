import React from "react";
import { AboutSection } from "../components/Section/AboutSection/AboutSection";
import {
  StyledContainer,
  StyledContainerWrapper,
} from "../components/Common/Container";
import { IntroductionSection } from "../components/Section/IntroductionSection/IntroductionSection";
import { Layout } from "../components/Layout/Layout";
import { SkillSection } from "../components/Section/SkillSection/SkillSection";
import { ProjectSection } from "../components/Section/ProjectSection/ProjectSection";
import { FooterSection } from "../components/Section/FooterSection/FooterSection";
import { Seo } from "../components/Seo/Seo";

export interface HomePageProps {}

const HomePage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Seo />
      <StyledContainerWrapper>
        <IntroductionSection />
        <StyledContainer>
          <AboutSection />
          <SkillSection />
          <ProjectSection />
        </StyledContainer>
        <FooterSection />
      </StyledContainerWrapper>
    </Layout>
  );
};

export default HomePage;
