import React from "react";
import styled, { css } from 'styled-components';
import Link from "next/link";

const baseButtonStyles = css`
  border: 0;
  font-size: 24px;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  cursor: pointer;
`;

const primaryButtonStyles = css`
  padding: 12px 24px;
  background-color: #D3EAFF;
  transition: background-color 0.2s ease-in;
  border: 2px solid #D3EAFF;
  width: 100%;

  &:hover {
    background-color: #fff;
  }

  &:active {
    background-color: #9f9f9f;
  }
`;

const secondaryButtonStyles = css`
  padding: 12px;
  background-color: #fff;
  transition: background-color 0.2s ease-in;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: #D3EAFF;
  }

  &:active {
    background-color: #dc6a9d;
  }
`;

const tertiaryButtonStyles = css`
  padding: 12px;
  background-color: #ECECEC;
  transition: background-color 0.2s ease-in;
  border: 2px solid #ECECEC;

  &:hover {
    background-color: transparent;
  }

  &:active {
    background-color: #ECECEC;
  }
`;

const StyledButton = styled.button`
  ${baseButtonStyles}
`;

const StyledPrimaryButton = styled(StyledButton)`
  ${primaryButtonStyles}
`;

const StyledSecondaryButton = styled(StyledButton)`
  ${secondaryButtonStyles}
`;

const StylesTertiaryButton = styled(StyledButton)`
  ${tertiaryButtonStyles}
`;

const StyledSecondaryActiveButton = styled(StyledSecondaryButton)`
  ${secondaryButtonStyles};
  background-color: #DD377D;

  &:hover {
    background-color: #dc6a9d;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary" | "secondaryActive";
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  href?: string;
};

export const Button = ({
  children,
  type,
  variant,
  disabled,
  onClick,
  icon,
  href,
  }: ButtonProps) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return StyledPrimaryButton;
      case "secondary":
        return StyledSecondaryButton;
      case "tertiary":
        return StylesTertiaryButton;
      case "secondaryActive":
        return StyledSecondaryActiveButton;
      default:
        return StyledButton;
    }
  };

  if (href) {
    const ButtonStyle = getButtonStyle();

    return (
      <Link
        href={href}
        passHref
      >
        <ButtonStyle
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {children}
        </ButtonStyle>
      </Link>
    );
  }

  const ButtonStyle = getButtonStyle();

  return (
    <ButtonStyle
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </ButtonStyle>
  );
};
