import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNavButton = styled(Link)`
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  position: relative;
  height: fit-content;
  
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

type NavButtonProps = {
  children: React.ReactNode;
  to: string;
}

export const NavButton = ({ children, to }: NavButtonProps) => {
  return (
    <StyledNavButton href={to}>
      { children }
    </StyledNavButton>
  )
}
