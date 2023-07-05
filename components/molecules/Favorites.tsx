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

const StyledCardListLess = styled(StyledCardList)`
  justify-content: flex-start;
`;

const StyledClearAllButton = styled.button`
  align-self: flex-end;
  margin-bottom: 40px;
  color: #556B84;
  font-size: 24px;
  font-family: 'Lato', sans-serif;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWarning = styled.p`
  font-family: sans-serif;
  font-size: 24px;
  align-self: center;
  opacity: 0.4;
`;

export const Favorites = () => {
  const [favoriteTours, setFavoriteTours] = useRecoilState(favoriteToursState);
  const images = ["/images/card1.png", "/images/card2.png", "/images/card3.png"];

  const removeAllFromFavorites = () => {
    setFavoriteTours([]);
  }

  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledClearAllButton
          type="button"
          onClick={ removeAllFromFavorites }
        >
          Clear all
        </StyledClearAllButton>
        { favoriteTours.length !== 0 ? (
          favoriteTours.length > 2 ? (
              <StyledCardList>
                {favoriteTours.map((favorite, index) => (
                  <Card
                    rocket={favorite}
                    key={favorite.id}
                    img={images[index % images.length]}
                    isFavorite
                  />
                ))}
              </StyledCardList>
            ) : (
              <StyledCardListLess>
                {favoriteTours.map((favorite, index) => (
                  <Card
                    rocket={favorite}
                    key={favorite.id}
                    img={images[index % images.length]}
                    isFavorite
                  />
                ))}
              </StyledCardListLess>
            )
        ) : (
          <StyledWarning>
            Favorites list is empty...
          </StyledWarning>
        )}
      </StyledContentWrapper>
    </StyledContainer>
  )
}
