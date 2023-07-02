import { MouseEvent, ReactNode } from "react";
import { styled } from "styled-components";

type sizes = "sm" | "md" | "lg";

interface DonButtonProps {
  children?: ReactNode;
  primary?: boolean;
  size?: sizes;
  disabled?: boolean;
  onCLick: (x: MouseEvent<HTMLButtonElement>) => void;
}

export const DonButton = ({
  children,
  primary,
  size,
  disabled,
  onCLick,
}: DonButtonProps) => {
  return (
    <span>
      <StyledButton
        primary={primary}
        size={size}
        disabled={disabled}
        onClick={onCLick}
      >
        {children}
      </StyledButton>
    </span>
  );
};

const StyledButton = styled.button<{
  primary?: boolean;
  size?: sizes;
  disabled?: boolean;
}>`
  padding: 10px;
  border: 2px solid;
  border-color: ${({ disabled }) => (disabled ? "#999" : "#555")};
  border-radius: 10px;
  background-color: ${({ primary, disabled }) =>
    disabled ? "#aaa" : primary ? "#05a" : "#555"};
  color: ${({ primary, disabled }) =>
    disabled ? "#bbb" : primary ? "#b2d8f5" : "#d3d3d3"};
  font-weight: ${({ primary }) => (primary ? "800" : "500")};
  font-size: ${({ size }) =>
    size === "sm" ? "12px" : size === "lg" ? "20px" : "16px"};
`;
