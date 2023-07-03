import React from "react";

import { Logo } from "../atoms/Logo";
import { Navigation } from "../atoms/Navigation";
import { Button } from "../atoms/Button";
import HeartIcon from "../atoms/HeartIcon";

import styled from 'styled-components';


const StyledButtonsDiv = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(30, 30, 30, 0.48);
  padding: 14px 80px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <StyledButtonsDiv>
        <Button
          type='button'
          variant="secondary"
          icon={<HeartIcon />}
        />

        <Button
          type='button'
          variant="primary"
        >
          Sign in
        </Button>
      </StyledButtonsDiv>
    </StyledHeader>
  )
}
