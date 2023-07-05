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
      <NavButton to="/">Home</NavButton>
      <NavButton to="#tours">Tours</NavButton>
      <NavButton to="/">About</NavButton>
      <NavButton to="/">Help</NavButton>
    </StyledNavbar>
  )
}
