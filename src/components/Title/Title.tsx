import React from "react";
import { StyledTitle } from "./Title.style";

export interface TitleProps {
  title: string;
}

export const Title: React.FunctionComponent<TitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};
