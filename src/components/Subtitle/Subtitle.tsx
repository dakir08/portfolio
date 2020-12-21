import React from "react";
import { StyledSubtitle } from "./Subtitle.style";

export interface SubtitleProps {
  title: string;
}

export const Subtitle: React.FunctionComponent<SubtitleProps> = props => {
  const { title } = props;
  return <StyledSubtitle {...props}>{title}</StyledSubtitle>;
};
