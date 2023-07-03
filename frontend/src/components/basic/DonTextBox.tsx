import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";
import { styled } from "styled-components";

type sizes = "sm" | "md" | "lg";

export interface DonTextboxProps {
  disabled?: boolean;
  primary?: boolean;
  size?: sizes;
  onEnterPressed?: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const DonTextbox = ({
  primary,
  size,
  disabled,
  onEnterPressed,
  value,
  setValue,
}: DonTextboxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      primary={primary}
      value={value}
      size={size}
      disabled={disabled}
      onChange={handleChange}
      onKeyDown={(e: KeyboardEvent) => {
        if (onEnterPressed && e.key === "Enter") onEnterPressed();
      }}
    />
  );
};

const StyledInput = styled.input<{
  primary?: boolean;
  size?: sizes;
  disabled?: boolean;
}>`
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid;
  border-color: ${({ disabled }) => (disabled ? "#999" : "#3d54b0")};
  border-radius: 20px;
  background-color: ${({ primary, disabled }) =>
    disabled ? "#aaa" : primary ? "#b7e2ff" : "#eee"};
  color: ${({ primary, disabled }) =>
    disabled ? "#bbb" : primary ? "#015a9e" : "#4e4e4e"};
  font-weight: ${({ primary }) => (primary ? "800" : "500")};
  font-size: ${({ size }) =>
    size === "sm" ? "12px" : size === "lg" ? "20px" : "16px"};
  width: 100%;
`;
