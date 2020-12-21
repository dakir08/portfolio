import React from "react";
import ReactDOM from "react-dom";
import {
  StyledPortal,
  StyledPortalChildren,
  StyledPortalDarken,
} from "./Portal.style";

export interface PortalProps {
  onClose?: () => void;
}

export const Portal: React.FunctionComponent<PortalProps> = ({
  onClose,
  children,
}) => {
  const portalRoot = document.getElementById("portal");
  const childrenElement = document.createElement("div");
  const childrenElementRef = React.useRef<HTMLDivElement>(childrenElement);

  React.useEffect(() => {
    if (!childrenElementRef || !portalRoot) return;

    portalRoot.appendChild(childrenElementRef.current);

    return () => childrenElementRef.current.remove();
  }, []);

  const renderPortal = () => (
    <StyledPortal>
      <StyledPortalDarken onClick={onClose} />
      <StyledPortalChildren>{children}</StyledPortalChildren>
    </StyledPortal>
  );

  return ReactDOM.createPortal(renderPortal(), childrenElementRef.current);
};
