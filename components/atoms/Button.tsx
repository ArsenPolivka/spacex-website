import React from "react";
import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  border: 0;
  font-size: 24px;
  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const StyledButton = styled.button`
  ${baseButtonStyles}
`;

const StyledPrimaryButton = styled(StyledButton)`
  padding: 12px 24px;
  background-color: #D3EAFF;
  transition: background-color 0.2s ease-in;
   
  &:hover {
    background-color: #fff;
  }
`;

const StyledSecondaryButton = styled(StyledButton)`
  padding: 12px;
  background-color: #fff;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #D3EAFF;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export const Button = ({
  children,
  type,
  variant,
  disabled,
  onClick,
  icon
}: ButtonProps) => {
  if (variant === "primary") {
    return (
      <>
        <StyledPrimaryButton
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          { icon && <IconWrapper>{icon}</IconWrapper> }
          { children }
        </StyledPrimaryButton>
      </>
    )
  }

  if (variant === "secondary") {
    return (
      <StyledSecondaryButton
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        { icon && <IconWrapper>{icon}</IconWrapper> }
        { children }
      </StyledSecondaryButton>
    )
  }
}
