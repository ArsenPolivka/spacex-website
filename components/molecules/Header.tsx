import React from "react";
import styled from 'styled-components';

import { Logo } from "../atoms/Logo";
import { Navigation } from "../atoms/Navigation";
import { Button } from "../atoms/Button";

import HeartIcon from "../icons/HeartIcon";

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
  position: sticky;
  top: 0;
  z-index: 1;
`;

type HeaderProps = {
  isFavorites?: boolean;
}

export const Header = ({
  isFavorites,
}: HeaderProps) => {
  return (
    <StyledHeader>
      <Logo />

      <Navigation />

      <StyledButtonsDiv>
        <Button
          type='button'
          variant={ isFavorites ? "secondaryActive" : "secondary" }
          icon={<HeartIcon color={ isFavorites ? "white" : "black"} /> }
          href="/favorites"
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
