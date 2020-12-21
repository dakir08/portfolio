import React from "react";
import { useWindowSize } from "../../hooks/useScreenSize";
import { HighLightText } from "../HighLight/HighLightText";
import Icon from "../Icon/Icon";
import {
  LeftArrow24,
  LeftArrow40,
  RightArrow24,
  RightArrow40,
} from "../Icon/Icons";
import {
  StyleCarouselIndicatorActive,
  StyledCarousel,
  StyledCarouselImage,
  StyledCarouselIndicator,
  StyledCarouselIndicators,
  StyledCarouselInstruction,
  StyledCarouselInstructionText,
  StyledCarouselLeftIcon,
  StyledCarouselRightIcon,
} from "./Carousel.style";

const instructionText = [
  { button: "A", description: "Previous" },
  { button: "D", description: "Next" },
  { button: "Q", description: "First" },
  { button: "E", description: "Next" },
  { button: "ESC", description: "Exit" },
];

export interface CarouselProps {
  onClose: () => void;
  data: string[];
}

export const Carousel: React.FunctionComponent<CarouselProps> = ({
  onClose,
  data,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const {
    windowSize: { width },
  } = useWindowSize();

  const handleLeftButtonClicked = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - 1);
    }
  };

  const handleRightButtonClicked = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "a") {
        handleLeftButtonClicked();
      }

      if (e.key === "d") {
        handleRightButtonClicked();
      }

      if (e.key === "q") {
        setCurrentIndex(0);
      }

      if (e.key === "e") {
        setCurrentIndex(data.length - 1);
      }

      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex]);

  const renderInstructionText = (params: {
    button: string;
    description: string;
  }) => (
    <StyledCarouselInstructionText key={params.button}>
      <strong>{params.button}:</strong>{" "}
      <HighLightText>{params.description}</HighLightText>
    </StyledCarouselInstructionText>
  );

  const renderIndicator = (amount: number) => {
    const indicators: JSX.Element[] = [];
    for (let index = 0; index < amount; index++) {
      indicators.push(
        <StyledCarouselIndicator
          key={index}
          css={currentIndex === index && StyleCarouselIndicatorActive}
          onClick={() => setCurrentIndex(index)}
        />
      );
    }

    return indicators.map(item => item);
  };

  return (
    <StyledCarousel>
      <StyledCarouselImage src={data[currentIndex]} alt="carousel" />
      <StyledCarouselLeftIcon onClick={handleLeftButtonClicked}>
        <Icon data={width > 768 ? LeftArrow40 : LeftArrow24} />
      </StyledCarouselLeftIcon>
      <StyledCarouselRightIcon onClick={handleRightButtonClicked}>
        <Icon data={width > 768 ? RightArrow40 : RightArrow24} />
      </StyledCarouselRightIcon>
      <StyledCarouselInstruction>
        {instructionText.map(renderInstructionText)}
      </StyledCarouselInstruction>
      <StyledCarouselIndicators>
        {renderIndicator(data.length)}
      </StyledCarouselIndicators>
    </StyledCarousel>
  );
};
