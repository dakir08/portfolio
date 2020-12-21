import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { rgba } from "polished";
import { color } from "../../theme/colors/color";
import { getRandomColor } from "../../utils/getRandomColor";
import { getRandomNumber } from "../../utils/getRandomNumber";

const animate = keyframes`
     0%{
         transform: translateY(0) rotate(0deg);
         opacity: 1;
         border-radius: 0;
     }

     50%{
         background-color: ${rgba(getRandomColor(), 0.5)};
     }

     100%{
         transform: translateY(-1300px) rotate(720deg);
         opacity: 0;
         border-radius: 50%;
     }
`;

export const StyledAnimationBackground = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledAnimationBackgroundObject = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: ${animate} 25s linear infinite;
  bottom: -150px;
  cursor: pointer;
`;

export const getRandomObjectStyle = () => {
  const left = getRandomNumber(1, 100);
  const size = getRandomNumber(10, 150);
  const delay = getRandomNumber(0, 4);
  const duration = getRandomNumber(9, 35);
  const randomColor = getRandomColor();
  return css`
    left: ${left}%;
    width: ${size}px;
    height: ${size}px;
    animation-delay: ${delay}s;
    animation-duration: ${duration}s;

    :hover {
      background: ${rgba(randomColor, 0.7)};
    }
  `;
};
