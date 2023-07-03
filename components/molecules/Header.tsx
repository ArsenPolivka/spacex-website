import React from "react";

import { Logo } from "../atoms/Logo";
import { Navigation } from "../atoms/Navigation";
import { Button } from "../atoms/Button";
import HeartIcon from "../atoms/HeartIcon";

import styled from 'styled-components';


const StyledButtonsDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const Header = () => {
  return (
    <>
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
    </>
  )
}
