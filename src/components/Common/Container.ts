import styled from "@emotion/styled";
import { darken } from "polished";
import { color } from "../../theme/colors/color";

export const StyledContainerWrapper = styled.div`
  background: ${color.background.secondary};
  background: -webkit-linear-gradient(
    to left,
    ${darken(0.15, color.background.secondary)},
    ${darken(0.1, color.background.secondary)}
  );
  background: linear-gradient(
    to left,
    ${darken(0.15, color.background.secondary)},
    ${darken(0.1, color.background.secondary)}
  );
  width: 100%;
`;

export const StyledContainer = styled.main`
  max-width: 1100px;
  padding: 0 24px;
  margin: 0 auto;
`;
