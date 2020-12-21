import React from "react";
import { AnimationBackground } from "../../AnimationBackground/AnimationBackground";
import {
  StyledIntroductionSection,
  StyledIntroductionSectionDescription,
  StyledIntroductionSectionDescriptionHighLight,
  StyledIntroductionSectionName,
  StyledIntroductionSectionTitle,
} from "./IntroductionSection.style";
import Typed, { TypedOptions } from "typed.js";

export interface IntroductionSectionProps {}

export const IntroductionSection: React.FunctionComponent = () => {
  const ref = React.useRef<HTMLSpanElement>(null);

  const typedOption: TypedOptions = {
    strings: ["Front-End", "Full-Stack", "Javascript Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    showCursor: false,
    loop: true,
  };

  React.useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const typed = new Typed(`#${element.id}`, typedOption);

    return () => typed.destroy();
  }, []);

  return (
    <StyledIntroductionSection id="introduction">
      <AnimationBackground />
      <StyledIntroductionSectionTitle>
        Hello, I'm{" "}
        <StyledIntroductionSectionName>Max Le.</StyledIntroductionSectionName>
      </StyledIntroductionSectionTitle>
      <StyledIntroductionSectionDescription>
        I'm a{" "}
        <StyledIntroductionSectionDescriptionHighLight
          ref={ref}
          id="_1337_typed"
        />{" "}
        developer based in
        <StyledIntroductionSectionDescriptionHighLight>
          {" "}
          Melbourne
        </StyledIntroductionSectionDescriptionHighLight>
        .
      </StyledIntroductionSectionDescription>
    </StyledIntroductionSection>
  );
};
