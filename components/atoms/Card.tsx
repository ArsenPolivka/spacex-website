import styled from "styled-components";
import {Button} from "./Button";
import HeartIcon from "../icons/HeartIcon";

const StyledCardWrapper = styled.div`
  width: 411px;
  height: 572px;
  border: 1px solid #D3EAFF;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  padding: 32px;
`;

const StyledDescriptionWrapper = styled.div`
  margin-bottom: 64px;
`;

const StyledTitle = styled.h3`
  color: #1E1E1E;
  text-align: center;
  font-size: 24px;
  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const StyledDescription = styled.p`
  color: #556B84;
  text-align: center;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Card = () => {
  return (
    <StyledCardWrapper>
      <StyledImage src="/images/card1.png" alt="card1"/>
      <StyledContentWrapper>
        <StyledDescriptionWrapper>
          <StyledTitle>extraordinary tour</StyledTitle>

          <StyledDescription>Lorem ipsum dolor sit amet consectetur adipiscing elit</StyledDescription>
        </StyledDescriptionWrapper>

        <StyledButtons>
          <Button variant="primary" wide>
            Buy
          </Button>
          <Button variant="tertiary" icon={ <HeartIcon  color="black" /> } />
        </StyledButtons>
      </StyledContentWrapper>
    </StyledCardWrapper>
  )
}
