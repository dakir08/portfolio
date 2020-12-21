import React from "react";
import { StyledHighLightText } from "./HighLightText.style";

export interface HighLightTextProps {
  strong?: boolean;
}

export const HighLightText: React.FunctionComponent<HighLightTextProps> = ({
  children,
  strong,
}) => {
  if (strong)
    return (
      <StyledHighLightText>
        <strong>{children}</strong>
      </StyledHighLightText>
    );

  return <StyledHighLightText>{children}</StyledHighLightText>;
};
