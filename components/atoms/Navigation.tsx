import { NavButton } from "./NavButton";
import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  gap: 32px;
`;

export const Navigation = () => {
  return (
    <StyledNavbar>
      <NavButton
        to="top"
        smooth={true}
        duration={1}
      >
        Home
      </NavButton>

      <NavButton
        to="tours"
        smooth={true}
        duration={1}
      >
        Tours
      </NavButton>

      <NavButton
        to="/"
        smooth={true}
        duration={1}
      >
        About
      </NavButton>

      <NavButton
        to="/"
        smooth={true}
        duration={500}
      >
        Help
      </NavButton>
    </StyledNavbar>
  )
}
