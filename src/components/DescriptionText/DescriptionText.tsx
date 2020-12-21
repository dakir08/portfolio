import React from "react";
import { StyledDescriptionText } from "./DescriptionText.style";

export interface DescriptionTextProps {
  children: React.ReactNode;
}

export const DescriptionText: React.FunctionComponent<DescriptionTextProps> = props => {
  const { children } = props;
  return <StyledDescriptionText {...props}>{children}</StyledDescriptionText>;
};
