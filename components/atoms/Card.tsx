import styled from "styled-components";

import { Button } from "./Button";

import HeartIcon from "../icons/HeartIcon";
import {useRecoilState} from "recoil";
import { favoriteToursState } from '../../recoil/atoms';

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 411px;
  height: 830px;
  border: 1px solid #D3EAFF;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  flex: 1;
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
  margin-top: auto;
`;

export const Card = ({ rocket }) => {
  const [favoriteTours, setFavoriteTours] = useRecoilState(favoriteToursState);

  const addToFavorites = () => {
    setFavoriteTours([...favoriteTours, rocket]);
  };

  return (
    <StyledCardWrapper>
      <StyledImage src="/images/card1.png" alt="card1"/>
      <StyledContentWrapper>
        <StyledDescriptionWrapper>
          <StyledTitle>{rocket.name}</StyledTitle>

          <StyledDescription>{rocket.description}</StyledDescription>
        </StyledDescriptionWrapper>

        <StyledButtons>
          <Button variant="primary">
            Buy
          </Button>
          <Button variant="tertiary" icon={ <HeartIcon  color="black" /> } onClick={addToFavorites}/>
        </StyledButtons>
      </StyledContentWrapper>
    </StyledCardWrapper>
  )
}
