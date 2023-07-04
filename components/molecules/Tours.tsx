import styled from "styled-components";

import { Card } from "../atoms/Card";

const StyledCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  
`;

const StyledWrapper = styled.div`
  margin-top: 200px;
`;

const StyledText = styled.span`
  color: #1E1E1E;
  font-size: 32px;
  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

const StyledContainer = styled.div`
  margin: auto;
  padding: 100px;
`;

export const Tours = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledText>popular tours</StyledText>
        <StyledCardWrapper>
          <Card />
          <Card />
          <Card />
        </StyledCardWrapper>
      </StyledWrapper>
    </StyledContainer>
  )
}
