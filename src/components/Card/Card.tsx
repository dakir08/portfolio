import React from "react";
import Icon from "../Icon/Icon";
import { React64 } from "../Icon/Icons";
import {
  StyledCard,
  StyledCardDescription,
  StyledCardDescriptionIconWrapper,
  StyledCardDescriptionSubtitle,
  StyledCardDescriptionTitle,
} from "./Card.style";

export interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
}) => {
  return (
    <StyledCard>
      <StyledCardDescriptionIconWrapper>
        <Icon data={React64} />
      </StyledCardDescriptionIconWrapper>
      <StyledCardDescription>
        <StyledCardDescriptionTitle>{title}</StyledCardDescriptionTitle>
        <StyledCardDescriptionSubtitle>
          {description}
        </StyledCardDescriptionSubtitle>
      </StyledCardDescription>
    </StyledCard>
  );
};
