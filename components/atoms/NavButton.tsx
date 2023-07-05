import React from "react";
import { Link } from 'react-scroll';
import styled from "styled-components";

const StyledNavButton = styled.div`
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  position: relative;
  height: fit-content;
  cursor: pointer;
  
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
  
  a {
    color: #fff;
  }
`;

type NavButtonProps = {
  children: React.ReactNode;
  to: string;
  smooth: boolean;
  duration: number;
}

export const NavButton = ({
  children,
  to,
  smooth,
  duration,
}: NavButtonProps) => {
  return (
    <StyledNavButton>
      <Link
        to={to}
        smooth={smooth}
        duration={duration}
      >
      { children }
      </Link>
    </StyledNavButton>
  )
}
