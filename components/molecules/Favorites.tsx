import { useRecoilState } from "recoil";
import styled from "styled-components";

import { favoriteToursState } from "../../recoil/atoms";

import { Card } from "../atoms/Card";

const StyledContainer = styled.div`
  padding: 80px;
`;

const StyledCardList = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Favorites = () => {
  const [favoriteTours] = useRecoilState(favoriteToursState);
  const images = ["/images/card1.png", "/images/card2.png", "/images/card3.png"];

  return (
    <StyledContainer>
      <StyledCardList>
        {favoriteTours.map((favorite, index) => (
          <Card
            rocket={favorite}
            key={favorite.id}
            img={images[index % images.length]}
          />
        ))}
      </StyledCardList>
    </StyledContainer>
  )
}
