import styled from "styled-components";

import ArrowIcon from "../icons/ArrowIcon";

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledText = styled.span`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-family: 'Lato', sans-serif;
  font-weight: 200;
  line-height: normal;
  margin-right: 8px;
`;

type ArrowButtonProps = {
  href: string;
}

export const ArrowButton = ({ href }: ArrowButtonProps) => {
  return (
    <StyledLink href={href}>
      <StyledText>
        Explore tours
      </StyledText>
      <ArrowIcon color="white"/>
    </StyledLink>
  )
}
