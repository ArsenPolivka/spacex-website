import React from "react";
import styled, { css } from 'styled-components';
import Link from "next/link";

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
  border: 2px solid #D3EAFF;
  width: 100%;
   
  &:hover {
    background-color: transparent;
  }
`;

const StyledSecondaryButton = styled(StyledButton)`
  padding: 12px;
  background-color: #fff;
  transition: background-color 0.2s ease-in;
  width: 100%;
  height: 100%;
  

  &:hover {
    background-color: #D3EAFF;
  }
`;

const StylesTertiaryButton = styled(StyledButton)`
  padding: 12px;
  background-color: #ECECEC;
  transition: background-color 0.2s ease-in;
  border: 2px solid #ECECEC;
  

  &:hover {
    background-color: transparent;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
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
  if (href) {
    if (variant === "primary") {
      return (
        <Link href={href} passHref legacyBehavior>
          <a>
            <StyledPrimaryButton
              type={type}
              disabled={disabled}
              onClick={onClick}
            >
              { icon && <IconWrapper>{icon}</IconWrapper> }
              { children }
            </StyledPrimaryButton>
          </a>
        </Link>
      )
    }

    if (variant === "secondary") {
      return (
        <Link href={href} passHref legacyBehavior>
          <a>
            <StyledSecondaryButton
              type={type}
              disabled={disabled}
              onClick={onClick}
            >
              { icon && <IconWrapper>{icon}</IconWrapper> }
              { children }
            </StyledSecondaryButton>
          </a>
        </Link>
      )
    }

    if (variant === "tertiary") {
      return (
        <Link href={href} passHref legacyBehavior>
          <a>
            <StylesTertiaryButton
              type={type}
              disabled={disabled}
              onClick={onClick}
            >
              { icon && <IconWrapper>{icon}</IconWrapper> }
              { children }
            </StylesTertiaryButton>
          </a>
        </Link>
      )
    }
  }
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

  if (variant === "tertiary") {
    return (
      <StylesTertiaryButton
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        { icon && <IconWrapper>{icon}</IconWrapper> }
        { children }
      </StylesTertiaryButton>
    )
  }
}
