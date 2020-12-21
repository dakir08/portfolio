import React from "react";
import { getRandomNumber } from "../../utils/getRandomNumber";
import {
  getRandomObjectStyle,
  StyledAnimationBackground,
  StyledAnimationBackgroundObject,
} from "./AnimationBackground.style";

export interface AnimationBackgroundProps {}

export const AnimationBackground: React.FunctionComponent = () => {
  return (
    <StyledAnimationBackground>
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
      <StyledAnimationBackgroundObject css={getRandomObjectStyle()} />
    </StyledAnimationBackground>
  );
};
